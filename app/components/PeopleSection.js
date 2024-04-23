"use client";
import React from 'react';
import Image from 'next/image';

const PeopleSection = ({ data, status }) => { // Now accepts 'data' and 'status' as props
    // Filter the data based on the status ('current' or 'alumni')
    const filteredData = data.filter((person) => person.attributes.work_status === status);
    const rows = [];

    for (let i = 0; i < filteredData.length; i += 3) {
        const peopleRow = filteredData.slice(i, i + 3);
        const row = (
            <div className="row" key={i}>
                {peopleRow.map((person, index) => (
                    <div className="4u 12u(narrower)" key={index}>
                        <section className="special">
                            <a href={person.attributes.Homepage} className="image fit">
                            <Image 
                                src={`${process.env.NEXT_PUBLIC_DEV_SERVER}${person.attributes.Photo.data.attributes.url}` || `/images/default-person.png`}
                                alt={person.attributes.Fullname}
                                width={400}
                                height={300}
                                />

                                </a>
                                <h3 style={{ margin: '0' }}>{person.attributes.Fullname}</h3>
                                    <p>
                                    {person.attributes.CurrentPosition ? person.attributes.CurrentPosition : person.attributes.Title.data.attributes.Text}
                                    <br />
                                    {person.attributes.Department.data.attributes.DepartmentName}
                                    </p>

                            
                            {/* <ul className="actions">
                                <li><a href={person.attributes.Homepage} className="button alt">Homepage</a></li>
                            </ul> */}
                        </section>
                    </div>
                ))}
            </div>
        );
        rows.push(row);
    }

    return <>{rows}</>;
}
export default PeopleSection;
