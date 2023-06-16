import React, { useState } from "react";
import styles from './InspirationSection.module.scss'
import { INSPIRATION_SECTION } from "../../data/data";
import SectionBtn from "../SectionBtn/SectionBtn";

const InspirationSection = () => {
    const [sectionOffset, setSectionOffset] = useState(0);

	return (
		<div style={{overflow: 'hidden', position: 'relative', width: '100%'}}>
            {sectionOffset<0 ? <SectionBtn direction="left" setSectionOffset={setSectionOffset} offset={300}/> : ''}
			{sectionOffset>-600 ? <SectionBtn direction="right" setSectionOffset={setSectionOffset} offset={300}/> : ''}
            <div className={styles.container} style={{transform: `translateX(${sectionOffset}px)`}}>
			<div className={styles.sectionTitle}>
				<h2>Znajdź inspiracje</h2>
				<p>w kategroii Sport i turystyka</p>
			</div>
			{INSPIRATION_SECTION.map((element) => {
				return (
					<div key={element.id}>
						<img src={element.img} alt={element.title} />
                        <div className={styles.title}>{element.title}</div>
					</div>
				);
			})}
		</div>
        </div>
	);
};

export default InspirationSection;
