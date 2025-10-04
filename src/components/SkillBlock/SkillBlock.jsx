import Icon from '../Icon/Icon'
import Language from '../Language/Language'
import styles from './SkillBlock.module.css'
import SKILL from './skills.info'
import LANGUAGE from '../Language/Language.info'

export default function SkillBlock() {
    return(
        <div className={styles.container}>
            <h2>MY SKILLS</h2>

            <div className={styles.icon_container}>
               {SKILL.map((element, index) => 
               <Icon 
                    key={index} 
                    link={element.link} 
                    name={element.name}
               />)}
            </div>

            <div className={styles.language_container}>
                {LANGUAGE.map((element, index) => 
                <Language 
                    key={index} 
                    link={element.link} 
                    name={element.name} 
                    value={element.value} 
                />)}
            </div>
        </div>
    )
}