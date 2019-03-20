import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'BeersWebPartStrings';
import Beers from './components/Beers';
import { IBeersProps } from './components/IBeersProps';

import { IBeer, BrewZapService} from './../../services/brewZapService';

export interface IBeersWebPartProps {
  description: string;
}

export default class BeersWebPart extends BaseClientSideWebPart<IBeersWebPartProps> {
  private brewZapService: BrewZapService;

  public async render() {
    try {
      this.brewZapService = new BrewZapService(this.context.httpClient);
      let beers = await this.brewZapService.getBeers('on_tap eq true');

      const element: React.ReactElement<IBeersProps > = React.createElement(
        Beers,
        {
          beers: beers,
          brewZapService: this.brewZapService
        }
      );
      ReactDom.render(element, this.domElement);
    }
    catch (exception) {
      console.log('Exception - ', exception);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
