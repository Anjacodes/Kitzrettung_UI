import Satzung from '../../assets/Vereinssatzung-Rehkitz.pdf'
import Betterplace from '../../assets/betterplace.png'
import PayPal from  '../..//assets/paypal.png'

const SpendenObject = {
    title: "SPENDEN",
    paragraphs: [
        "Als eingetragener und gemeinnütziger Verein sind wir auf externe Unterstützung und Spenden angewiesen, um die notwendige Technik für die Rehkitzrettung zu finanzieren und zu erhalten.",
        <>Sämtliche Gelder werden dabei ausschließlich für in der <a href={Satzung} target="_blank" rel="noreferrer" className='text-second hover:underline'>Satzung</a> ausgewiesenen Vereinszwecke aufgewendet. Unser Mitglieder verrichten ihr Engagement dabei ehrenamtlich und ohne Vergütung. Für jede Spende, die an uns gerichtet wird, können wir auf Wunsch eine Spendenquittung ausstellen.</>,
        "Es gibt mehrere Möglichkeiten uns finanziell zu unterstützen (durch Klicken auf die Logos wirst du zu dem jeweiligen externen Spendenportal weitergeleitet): " ,
        <div className='flex items-center justify-evenly'>
            <a href="https://www.paypal.com/donate/?hosted_button_id=72SBW8E9S9MCN" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer"><img src={PayPal}/></a>
            <a href="https://www.betterplace.org/de/projects/120557-rehkitzrettung-durch-drohnen?utm_campaign=email-notifications&utm_medium=www-betterplace-org--de--projects--120557-rehkitzrettung-durch-drohnen&utm_source=project_manager_notifier-project_tips" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer w-1/2"><img src={Betterplace}/></a>
        </div>
    ]
}

export default SpendenObject