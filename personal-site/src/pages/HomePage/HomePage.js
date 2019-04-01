import React from "react";
import styles from "./HomePage.module.css";
import Container from "./app-level/UI/Container/Container";

const homePage = () => {
	return (
		<div className={styles.HomePage}>
			<Container>
				<header className={styles.header}>
					<p>Joshua</p>
					<nav>
						<ul>
							<li>PORTFOLIO</li>
						</ul>
					</nav>
				</header>

				<div className={styles.showcase}>
					<h1>Backend Developer</h1>
				</div>

				<section name="portfolio">
					<p className={styles.portfolioText}>PORTFOLIO</p>
					<div className={styles.cardPlacer}>
						<div className={styles.card}>
							<div className={styles.cardimgbox}>
								<img src="" alt="card_image" />
							</div>
						</div>
					</div>
				</section>

				<section name="aboutme">
					<h2>About me</h2>
					<div className={styles.myimgbox}>
						<img src="" alt="my_face" />
					</div>
					<h4 className={styles.mynameText}>Joshua Wiggins</h4>
					<p>React | Node.js</p>
					<p className={styles.description}>
						{" "}
						Offf whatever i am cool
					</p>

					<h3>My Tools</h3>
					<div className={styles.toolsbox}>
						<div className={styles.toolimg}>
							<img src="" alt="tool_icon" />
						</div>
					</div>
				</section>

				<section name="contact me">
					<h2>Contact Me</h2>
					<form>
						<div className={styles.formControl}>
							<label for="client-name"> Your Name *</label>
							<input
								type="text"
								name="client-name"
								id="client-name"
								placeholder="e.g. Mitch McConnel"
							/>
						</div>
						<div className={styles.formControl}>
							<label for="client-email">Email Address*</label>
							<input
								type="text"
								name="client-email"
								id="client-email"
								placeholder="e.g. mitch@hotmail.com"
							/>
						</div>
						<div className={styles.formControl}>
							<label for="client-message">Message*</label>
							<textarea
								name="client-message"
								id="client-message"
							/>
						</div>
					</form>
				</section>

				<footer>
					<p>Copyright &C 2019 Joshua Wiggins</p>
					<p>Powered By React.</p>
				</footer>
			</Container>
		</div>
	);
};

export default homePage;
