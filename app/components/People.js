import React from 'react';
import PeopleSection from './PeopleSection';
import Image from 'next/image';

const People = ({ data }) => { 
    if (!data || data.length === 0) {
        return <p>No people available.</p>;
    }
    const currentPeople = data.filter(person => person.attributes.work_status === 'current');
    const alumniPeople = data.filter(person => person.attributes.work_status === 'alumni');

    return (
        <div className="wrapper style3">
            <section className="container">
                <header className="major">
                    <h2>
                        <a name="people">PEOPLE</a>
                    </h2>
                </header>


                {/* <!-- All pictures of people should be 3x width, 2x height (eg 3000 x 2000 pixels) --> */}

                <div className="outer-div">
                    <div className="inner-div">

                        <section className="special">
                            <a href="http://www.bmb.uga.edu/directory/natarajan-kannan">
                            <Image 
                                src="/images/kannan2.jpg" 
                                alt="Kannan" 
                                width={382} 
                                height={573} 
                                style={{ width: '100%', maxWidth: '382px', height: 'auto', color: 'transparent' }} 
                                />
                                </a>
                            <h3>Dr. Natarajan Kannan</h3>
                            <p><b>Professor and Georgia Coalition Distinguished Scholar</b></p>
                            <ul className="actions">
                                <li><a href="http://www.bmb.uga.edu/directory/natarajan-kannan" className="button alt">Homepage</a></li>
                            </ul>
                        </section>

                    </div>
                </div>
                <PeopleSection data={currentPeople} status="current" />
                                <br />

                <header className="major">
                    <h2>
                        <a name="people">ALUMNI</a>
                    </h2>
                </header>

                <PeopleSection data={alumniPeople} status="alumni" />

            </section>
        </div>
    )
};
export default People;