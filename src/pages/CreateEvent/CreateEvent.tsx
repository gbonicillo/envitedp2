import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './CreateEvent.module.css';

const fields = [
    {
        label: 'Name',
        key: 'name',
        type: 'text'
    },
    {
        label: 'Host Name',
        key: 'hostName',
        type: 'text'
    },
    {
        label: 'Start Date',
        key: 'startDate',
        type: 'date'
    },
    {
        label: 'End Date',
        key: 'endDate',
        type: 'date'
    },
    {
        label: 'Location',
        key: 'location',
        type: 'text'
    },
    {
        label: 'Photo',
        key: 'photo',
        type: 'text'
    }
];

function CreateEvent() {
    
    const [event, setEvent] = useState({
        name: 'Your Event',
        hostName: 'Your Host',
        startDate: '27/09/2022',
        endDate: '28/09/2022',
        location: 'Melbourne, Australia',
        photo: 'https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg'
    })
    const { name, hostName, startDate, endDate, location, photo} = event;
    return (
        <>
            <div className={styles.container}>
                {photo ? <img alt="" className='z-20' src={photo} width="100%" height="150px" /> : null}
                <div className='mx-6 p-4 z-21 -mt-24 relative bg-white mb-8 rounded-md opacity-90'>
                    <h1 className={`text-3xl font-bold mb-1 ${styles.title}`}>{name}</h1>
                    <p>{hostName}</p>
                    <p>{startDate} {startDate && endDate ? '-' : ''} {endDate}</p>
                    <strong>{location}</strong>
                </div>
                <div className='mx-6'>
                    {fields.map(field => <><div className='text-base mb-1' style={{
                    }}>{field.label}</div><input className='h-8 w-full p-2 mb-1 rounded-md focus:outline-none' key={field.key} value={event[field.key]} type={field.type} onChange={e => {
                        setEvent(state => ({
                            ...state,
                            [field.key]: e.target.value
                        }))
                    }} /></>)}
                </div>
                <div className='flex justify-center mt-8'>
                    <Link to="/event">
                        <button className='visible md:invisible text-base font-bold button'>Create Event</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CreateEvent