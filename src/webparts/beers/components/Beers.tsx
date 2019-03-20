import * as React from 'react';
import styles from './Beers.module.scss';
import { IBeersProps } from './IBeersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader, IonItem, IonButton, IonThumbnail, IonLabel } from '@ionic/react';

export default class Beers extends React.Component<IBeersProps, {}> {
  public render(): React.ReactElement<IBeersProps> {
    return (
      <div className={ styles.beers }>
        <IonList>
          <IonListHeader>
            Beers
          </IonListHeader>
          {
            this.props.beers.map(beer => (
              <IonItem>
                <IonThumbnail slot="start">
                  <img src={beer.beer_label}></img>
                </IonThumbnail>
                <h3>
                  {beer.beer_name}
                </h3>
                <br />
                <p>
                  {beer.brewery_name}
                </p>
              </IonItem>
            ))
          }
        </IonList>
      </div>
    );
  }
}
