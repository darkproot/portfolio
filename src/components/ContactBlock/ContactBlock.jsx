import ContactIcon from '../ContactIcon/ContactIcon'
import styles from './ContactBlock.module.css'
import CONTACT from './contact.info'   

export default function ContactBlock() {
    return(
        <div className={styles.container}>
            <h2>CONTACT</h2>

            <div className={styles.icon_container}>
                {CONTACT.map((element, index) => 
                    <ContactIcon 
                        key={index} 
                        link={element.link}
                        icon={element.icon}
                        color={element.color}
                        name={element.name} 
                    />
                )}
            </div>
        </div>
    )
}