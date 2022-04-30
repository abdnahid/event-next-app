import React from 'react';
import Image from 'next/image';
import classes from './eventItem.module.scss';
import Link from 'next/link';
import { BiTime } from 'react-icons/bi';
import { ImLocation, ImPriceTags } from 'react-icons/im';
import moment from 'moment';

const EventItem = ({ eventInfo }) => {
  const {
    _id,
    ticketPrice,
    picture,
    eventTitle,
    organizedBy,
    location,
    eventDate,
  } = eventInfo;
  const formattedDate = moment(eventDate).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <>
      <div className={classes.eventitem}>
        <h2>
          <Link href={`/events/${_id}`}>{eventTitle}</Link>
        </h2>
        <div className={classes.eventfeaturedimage}>
          <Image src={picture} alt={eventTitle} width={750} height={500} />
        </div>
        <ul className={classes.eventmetalist}>
          <li>
            <BiTime className={classes.iconStyle} />
            <span>
              <strong>Time:</strong> {formattedDate}
            </span>
          </li>
          <li>
            <ImLocation className={classes.iconStyle} />
            <span>
              <strong>Location:</strong> {location}
            </span>
          </li>
          <li>
            <ImPriceTags className={classes.iconStyle} />
            <span>
              <strong>Ticket Price:</strong> {ticketPrice}
            </span>
          </li>
        </ul>
        <div className='event-button grid grid-cols-2 gap-1'>
          <button className=''>Learn More</button>
          <button className='button-outline'>Add to calender</button>
        </div>
      </div>
    </>
  );
};

export default EventItem;
