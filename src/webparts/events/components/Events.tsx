import * as React from 'react';
import styles from './Events.module.scss';
import { IEventsProps } from './IEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'EventsWebPartStrings';
import { IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon, IonLabel } from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

export default class Events extends React.Component<IEventsProps, {}> {
  public render(): React.ReactElement<IEventsProps> {
    return (
      <div>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>
              {strings.Header}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          this.props.events.map(event => (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                {event.title}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <img src={event.image_url}></img>
                <p>
                  {event.description}
                </p>
                {
                  event.start_date &&
                  <h4>
                    <IonIcon name="calendar" slot="start"></IonIcon>
                    {event.start_date} - {event.end_date}
                  </h4>
                }
                {
                  event.cost &&
                  <p>
                    Cost: {event.cost}
                  </p>
                }
              </IonCardContent>
            </IonCard>
          ))
        }
      </div>
    );
  }
}
