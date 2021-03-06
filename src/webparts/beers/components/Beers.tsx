import * as React from 'react';
import styles from './Beers.module.scss';
import { IBeersProps } from './IBeersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'BeersWebPartStrings';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IBeer } from '../../../services/brewZapService';

import { IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader, IonItem, IonButton, IonThumbnail, IonLabel, IonSegment, IonSegmentButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export default class Beers extends React.Component<IBeersProps, {
  beers: IBeer[],
  filter: string;
}> {
  
  constructor(props) {
    super(props);

    this.state = {
      beers: this.props.beers,
      filter: 'on_tap'
    };
  }

  public render(): React.ReactElement<IBeersProps> {
    return (
      <div className={ styles.beers }>
      <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>
              {strings.Header}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonSegment onIonChange={this.updateSegment}>
        <IonSegmentButton value="on_tap" checked={this.state.filter === 'on_tap'}>On Tap</IonSegmentButton>
        <IonSegmentButton value="in_bottle" checked={this.state.filter === 'in_bottle'}>Cans / Bottles</IonSegmentButton>
        <IonSegmentButton value="on_deck" checked={this.state.filter === 'on_deck'}>On Deck</IonSegmentButton>
      </IonSegment>
        <IonList>
          {
            this.state.beers.map(beer => (
              <IonItem>
                <IonThumbnail slot="start">
                  <img src={beer.beer_label}></img>
                </IonThumbnail>
                <IonLabel>
                {beer.beer_name} - {beer.brewery_name}
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </div>
    );
  }

  private updateSegment = (e: CustomEvent) => {
    this.setState((prevState) => ({
      ...prevState,
      filter: e.detail.value
    }));

    this.getBeers();
  }

  private async getBeers() {
    console.log('Filter changed');
    let filterString: string = `${this.state.filter} eq true`;
    let beers = await this.props.brewZapService.getBeers(filterString);

    this.setState({
      beers: beers
    });
  }
}
