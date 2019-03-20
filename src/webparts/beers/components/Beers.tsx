import * as React from 'react';
import styles from './Beers.module.scss';
import { IBeersProps } from './IBeersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { IonCard, IonCardContent, IonCardHeader, IonList, IonListHeader, IonItem, IonButton } from '@ionic/react';

export default class Beers extends React.Component<IBeersProps, {}> {
  public render(): React.ReactElement<IBeersProps> {
    return (
      <div className={ styles.beers }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <IonButton>Button</IonButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
