import { NavLink } from "react-router-dom";

const MotivationObject = {
    title: "UNSERE MOTIVATION",
    paragraphs: [
        "Jedes Jahr verlieren in Deutschland ca. 100.000 Rehkitze während der Grasmahd im Frühjahr durch den Einsatz der landwirtschaftlichen Maschinen ihr Leben, oder werden durch die Messer der Maschinen lediglich verstümmelt, was noch wesentlich tragischer ist. Der Tod einer Vielzahl von Individuen weiterer Tierarten, wie zum Beispiel Hasen, Lerchen, Rebhühner und zerstörter Gelege ist ungezählt.",

        <>Besonders bei Rehkitzen ist das genetisch geprägte Verhalten während der ersten Lebenswochen Ursache für die hohe Todeszahl (siehe <NavLink to="/biologie" className='text-blue-600 hover:underline'>Biologie</NavLink> der Rehe). Neben dem so entstehenden Leid, das schon aus Tierschutzgründen vermieden werden muss, verursachen die Reste der getöteten Tiere eine Verunreinigung des Mähgutes (Heu oder Silage). Dadurch entsteht das sogenannte Gift „Botulinumtoxin“. Dieses führt bei Rindern, Pferden und Schafen, die das verunreinigte Mähgut fressen, zu Vergiftungserscheinungen bis hin zum Tod. So dass hier weiteres Tierleid entsteht.</>,

        <>Verantwortliche für den Einsatz der Maschinen und den daraus resultierenden Schäden, auch im Sinne des Tierschutzgesetzes sind rechtlich allein die Landwirte, gegebenenfalls in Verbindung mit dem zuständigen Jagdausübungsberechtigten (siehe <NavLink to="/rechtliches" className='text-blue-600 hover:underline'>Rechtliches</NavLink>).</>,

        "Die rechtliche Situation beschreibt das Problem ganzheitlich betrachtet aber nur sehr beschränkt. Zwar muss der Landwirt alles unternehmen, um das Töten oder Verletzen von Tieren beim Mähen zu vermeiden, aber das Ausbringen von Scheuchen am Vorabend, das Absuchen der Flächen vor der Mahd, gegebenenfalls auch mit Hunden, sind aufwendig und oft wegen Unkenntnis in der Anwendung nur wenig effektiv. Diese Methoden bedeuten für den einzelnen Landwirt in der Regel einen erheblichen zeitlichen und finanziellen Aufwand. Daher vertrauen diese nach unserer Erfahrung oft auf die wenig effektiven Methoden oder auf das Glück.",

        "In diesem Dilemma von Tierwohl und Landwirtschaft eine Lösung anzubieten, ist Aufgabe unseres Vereins."
    ],

}

export default MotivationObject;