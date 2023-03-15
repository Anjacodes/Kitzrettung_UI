import { NavLink } from "react-router-dom";

const ProcedureObject = {
    title: "UNSER VERFAHREN",
    paragraphs: [
        "Der Erfolg der Wildtierrettung mit unserem Verfahren hängt von einem hohen Maß an zielgerichteter Organisation und dem Mitwirken aller Betroffenen ab. Auch wenn aufgrund des Wetters Vorlaufzeiten bis zum Mähtermin oft sehr kurz sind, ist ein Abruf unserer Leistungen spätestens bis 18:00 Uhr am Vorabend erforderlich, um die Teams noch rechtzeitig zusammenstellen zu können. Auch weit im Vorfeld können bereits Absprachen getroffen werden, was uns die Planung in jedem Fall erleichtert.",

        <>Die Kontaktaufnahme soll möglichst über die unter <NavLink to="/kontakt" className='text-second hover:underline'>Kontakt</NavLink> angegebene Rufnummer erfolgen. Alternativ kannst du auch über unser Online Formular eine <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" className='text-second hover:cursor-pointer hover:underline' rel="noopener noreferrer" target="_blank">Befliegungsanfrage stellen</a>. Es sind in jedem Fall die Anzahl der Flächen mit ungefährer Größe der jeweiligen Fläche mitzuteilen, sowie ein Treffpunkt mit einem Verantwortlichen des Anfordernden zu vereinbaren. Achtung: Beginn der Missionen ist, je nach Auftragsaufkommen, ca. 05:00 Uhr morgens.</>,

        <>WICHTIG: Sofern Landwirte unsere Leistungen abrufen, ist ausnahmslos die Zustimmung des zuständigen Jagdausübungsberechtigten erforderlich (siehe <NavLink to="/rechtliches" className='text-second hover:underline'>Rechtliches</NavLink>). Im optimalen Fall begleitet er die Mission.</>
    ],
}

export default ProcedureObject;