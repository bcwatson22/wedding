import React from 'react';
import moment from 'moment';

const Timeline = () => {
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
          title: 'Photos',
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
          position: 'right'
        },
        {
          time: '15:45',
          title: 'Food',
          icon: 'food',
          position: 'left'
        }
      ]
    },
    {
      hour: '16:00'
    },
    {
      hour: '17:00'
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
      hour: '19:00'
    },
    {
      hour: '20:00',
      events: [
        {
          time: '20:00',
          title: 'Pizza',
          icon: 'pizza',
          position: 'left'
        }
      ]
    },
    {
      hour: '21:00'
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

  return (
    <section className="timeline">
      {timings.map((timing) => {
        const { hour, events } = timing;
        const time = `2021-05-29T${hour}:00`;

        return (
          <article className="timeline__hour" key={hour}>
            <h2><time dateTime={time}>{moment(time).format('ha')}</time></h2>
            {events && events.map((event) => {
              const { time, title, icon, position } = event;
              const start = `2021-05-29T${time}:00`;
              const image = require(`./../../assets/icons/timings/${icon}.svg`);
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
                  <div className="timeline__event-info">
                    <span className={`timeline__event-icon${icon === 'speeches' ? ' timeline__event-icon--tall' : ''}`}><img src={image} alt={title} /></span>
                    <p><time dateTime={start}>{moment(start).format('h:mma')}</time></p>
                    <h3>{title}</h3>
                  </div>
                </aside>
              );
            })}
          </article>
        );
      })}


      {/*<article className="scrolling-table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {taxiCompanies.map((company) => {
              let { name, phone } = company,
                  number = phone.replace('0', '+44').replace(/\s/g, '');

              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td><a href={`tel:${number}`} className="button button--text">{phone}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>*/}
    </section>
  );
};

export default Timeline;
