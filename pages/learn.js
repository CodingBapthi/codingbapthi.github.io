import styles from '../styles/Learn.module.css'

export default function Learn() {
    return(
        <>
            <main className={styles.main} onLoad={createStarEffect}>
                <h1>Hey ihr Web-Gurus</h1>
                <p>Ich bin der CodingBapthi und ich bin hier um euch zu helfen</p>
                <p>Dieses Jahr werde ich mich ein wenig im Content Createn versuchen und neben einem eigenen Blog auch auch das ein oder andere Video verbreiten!</p>
            </main>
        </>
    )
}

// Create a dynamic function that creates a star effect in the background of the page
export const createStars = () => {
    if (process.browser) {
        let star = document.createElement("div")
        star.className = styles.star
        star.style.left = Math.random() * 100 + "vw"
        star.style.animationDuration = Math.random() * 2 + 3 + "s"
        star.style.opacity = Math.random()
        document.body.appendChild(star)
        setTimeout(() => {
            star.remove()
        }, 5000)
    }
}
// Create a function that creates a star effect in the background of the page
function createStarEffect() {
    setInterval(createStars, 150)
}