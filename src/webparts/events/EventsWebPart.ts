import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'EventsWebPartStrings';
import Events from './components/Events';
import { IEventsProps } from './components/IEventsProps';

import {  BrewZapService} from './../../services/brewZapService';


export interface IEventsWebPartProps {
  tenantId: string;
  locationId: string;
}

export default class EventsWebPart extends BaseClientSideWebPart<IEventsWebPartProps> {
  private brewZapService: BrewZapService;

  public async render() {
    try {
      this.brewZapService = new BrewZapService(this.context.httpClient);
      let events = await this.brewZapService.getEvents(this.properties.tenantId, this.properties.locationId);

      const element: React.ReactElement<IEventsProps> = React.createElement(
        Events,
        {
          events: events
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
                PropertyPaneTextField('tenantId', {
                  label: strings.TenantIdFieldLabel
                }),
                PropertyPaneTextField('locationId', {
                  label: strings.LocationIdFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
