import React, { useEffect, useContext, useRef, createRef } from 'react';

import moment from 'moment';
import * as basicScroll from 'basicscroll';

import LoadingContext from './../../context/LoadingContext';
import Icon from './../Icon';

import { delay } from './../../services/utils';

import './Timeline.scss';

const initHours = (target, offset) => {

  let instance = basicScroll.create({
    elem: offset,
    from: 'top-middle',
    to: 'middle-middle',
    direct: target,
    props: {
      '--disappear': {
        from: 0.999,
        to: 0.001
      }
    }
  });

  instance.update();
  instance.start();

}

const initEvents = (target) => {

  let instance = basicScroll.create({
    elem: target,
    from: 'top-middle',
    to: 'middle-middle',
    direct: true,
    props: {
      '--appear': {
        from: 0.001,
        to: 0.999
      }
    }
  });

  instance.update();
  instance.start();

}

const timings = [
  {
    hour: '12:00',
    events: [
      {
        time: '12:30',
        title: 'Day guests arrive',
        icon: 'guests',
        position: 'right'
      }
    ]
  },
  {
    hour: '13:00',
    events: [
      {
        time: '13:00',
        title: 'Ceremony',
        icon: 'ceremony',
        position: 'left'
      },
      {
        time: '13:30',
        title: 'Drinks & canapés',
        icon: 'drinks',
        position: 'right'
      }
    ]
  },
  {
    hour: '14:00',
    events: [
      {
        time: '14:00',
        title: 'Wedding photos',
        icon: 'photos',
        position: 'left'
      }
    ]
  },
  {
    hour: '15:00',
    events: [
      {
        time: '15:00',
        title: 'Speeches',
        icon: 'speeches',
        position: 'left'
      },
      {
        time: '15:45',
        title: 'Food',
        icon: 'food',
        position: 'right'
      }
    ]
  },
  {
    hour: '16:00'
  },
  {
    hour: '17:00',
    events: [
      {
        time: '17:30',
        title: 'Disco Stew',
        icon: 'frolicking',
        position: 'left'
      }
    ]
  },
  {
    hour: '18:00',
    events: [
      {
        time: '18:00',
        title: 'Evening guests arrive',
        icon: 'evening',
        position: 'right'
      }
    ]
  },
  {
    hour: '19:00',
    events: [
      {
        time: '19:30',
        title: 'First dance',
        icon: 'boogying',
        position: 'left'
      }
    ]
  },
  {
    hour: '20:00',
    events: [
      {
        time: '20:30',
        title: 'Evening food',
        icon: 'pizza',
        position: 'right'
      }
    ]
  },
  {
    hour: '21:00',
    events: [
      {
        time: '21:00',
        title: 'Party time',
        icon: 'bomb',
        position: 'left'
      }
    ]
  },
  {
    hour: '22:00'
  },
  {
    hour: '23:00',
    events: [
      {
        time: '23:30',
        title: 'Carriages',
        icon: 'carriages',
        position: 'right'
      }
    ]
  },
  {
    hour: '00:00'
  }
];

const needsHourBinding = (timing, index) => {

  const isAnEvenIndex = (index % 2 === 0);
  const hasEventsThisHour = (timing.events);
  const hasEventOnTheHour = (hasEventsThisHour && timing.events.find(event => event.time.endsWith('00')));
  const hasOverlappingEvent = (isAnEvenIndex && hasEventOnTheHour && hasEventOnTheHour.position === 'left')
      || (!isAnEvenIndex && hasEventOnTheHour && hasEventOnTheHour.position === 'right');

  return hasOverlappingEvent;

}

const Timeline = () => {
  const { hideLoading } = useContext(LoadingContext);

  const overlappingHours = timings.map((timing, index) => needsHourBinding(timing, index) ? timing : null).filter(hour => hour !== null);
  const hourRefs = useRef(overlappingHours.map(() => createRef()));
  const animatingEvents = timings.slice(1, -1).flatMap(({ events })=> events ? events : []);
  const eventRefs = useRef(animatingEvents.map(() => createRef()));

  useEffect(() => {

    hourRefs.current.map((hour) => initHours(hour.current, hour.current.firstChild));

    eventRefs.current.map((event, index) => {

      initEvents(event.current);

      if (index + 1 === eventRefs.current.length) delay(500).then(() => hideLoading());

      return event.current;

    });

  }, [hideLoading]);

  return (
    <section className="timeline">
      {timings.map((timing, index) => {
        const { hour, events } = timing;
        const i = overlappingHours.findIndex(h => h.hour === hour);
        const time = `2022-05-14T${hour}:00`;

        return (
          <article className="timeline__hour" key={hour} ref={hourRefs.current[i]}>
            {i !== -1 && <span className="timeline__hour-offset">Offset</span>}
            {index !== timings.length - 1 && <span className="timeline__hour-marker">Marker</span>}
            <h2><time dateTime={time}>{moment(time).format('ha')}</time></h2>
            {events && events.map((event) => {
              const { time, title, icon, position } = event;
              const index = animatingEvents.findIndex(e => e.time === time);
              const start = `2022-05-14T${time}:00`;
              let modifier = 'timeline__event--';

              switch (time.substring(3, 5)) {

                case '00':
                  modifier += 'on-the-hour';
                  break;

                case '15':
                  modifier += 'quarter-past';
                  break;

                case '30':
                  modifier += 'half-past';
                  break;

                case '45':
                  modifier += 'quarter-to';
                  break;

                default:
                  modifier = '';

              }

              return (
                <aside className={`timeline__event timeline__event--${position}${modifier.length && ' ' + modifier}`} key={event.title}>
                  <div className="timeline__event-info" ref={eventRefs.current[index]}>
                    <Icon file={icon} folder="timings" alt={title} classes={`timeline__event-icon${icon === 'speeches' ? ' timeline__event-icon--tall' : ''}`} />
                    <p><time dateTime={start}>{moment(start).format('h:mma')}</time></p>
                    <h3>{title}</h3>
                  </div>
                </aside>
              );
            })}
          </article>
        );
      })}
    </section>
  );
};

export default Timeline;
