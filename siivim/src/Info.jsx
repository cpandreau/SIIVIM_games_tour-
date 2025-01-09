import React, { useState } from "react";
import "./Info.css";

const Info = ({ onInscrireClick }) => { 
    const [eligibilityFlipped, setEligibilityFlipped] = useState(false);
    const [reglementFlipped, setReglementFlipped] = useState(false);
    const [datesFlipped, setDatesFlipped] = useState(false);
    const [eligibilityChecked, setEligibilityChecked] = useState(false);
    const [reglementChecked, setReglementChecked] = useState(false);
    const [datesChecked, setDatesChecked] = useState(false);

    const handleEligibilityFlip = () => {
        setEligibilityFlipped(!eligibilityFlipped);
    };

    const handleReglementFlip = () => {
        setReglementFlipped(!reglementFlipped);
    };

    const handleDatesFlip = () => {
        setDatesFlipped(!datesFlipped);
    };

    const handleEligibilityCheck = () => {
        setEligibilityChecked(!eligibilityChecked);
    };

    const handleReglementCheck = () => {
        setReglementChecked(!reglementChecked);
    };

    const handleDatesCheck = () => {
        setDatesChecked(!datesChecked);
    };

    const allChecked = eligibilityChecked && reglementChecked && datesChecked;

    const handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "https://consultations.nevers.fr/277862";
    };

    return (
        <main>
            <div className="info">
                <p className="inst"><u>Informations & Instructions</u></p>
                <p className='pres'>
                    Organisé par la ville de <u>Nevers</u>, ce tournoi se déroule du <u>8 Février 2025</u> au <u>9 Février 2025</u> sur Fortnite.
                    <br />
                    <a href="../ppt/reglement.pdf" download="Reglement_Tournoi.pdf" className="download-reglement">
                       <u>Télécharger le règlement</u>
                    </a>
                </p>
                <img className='kevin' src="../image/kevin.webp" alt="Kevin" />
            </div>
            <div className="rules">
                <div className={`eligibility ${eligibilityFlipped ? 'flipped' : ''}`}>
                    <div className="eligibility-inner">
                        <div className="eligibility-front">
                            <p className="eli">Pour participer, il y a certaines conditions d'éligibilité !</p>
                            <button className="eli-button" onClick={handleEligibilityFlip}>Conditions d'éligibilité</button>
                        </div>
                        <div className="eligibility-back">
                            <p className="eli-text">Interdit aux employés et agents de Epic Games ou membre du Comité d'organisation.</p>
                            <p className="eli-text">Au moins un joueur de l'équipe doit être domicilié dans une ville éligible.</p>
                            <p className="eli-text">Les joueurs doivent avoir un compte Epic Games et Fortnite valide.</p>
                            <p className="eli-text">Les joueurs doivent être âgés d'au moins 15 ans et de maximum 25 ans à la date du 6 janvier 2025.</p>
                            <p className="eli-text">Les joueurs de 15 à 17 ans <u>doivent fournir une autorisation parentale lors de l'inscription.</u></p>
                            <label>
                                <input className="check" type="checkbox" checked={eligibilityChecked} onChange={handleEligibilityCheck} />
                                Je réponds à toutes les conditions d'éligibilité.
                            </label>
                            <button className="eli-button" onClick={handleEligibilityFlip}>Retour</button>
                        </div>
                    </div>
                </div>
                <div className={`reglement ${reglementFlipped ? 'flipped' : ''}`}>
                    <div className="reglement-inner">
                        <div className="reglement-front">
                            <p className="regl">Il est important de prendre connaissance du règlement.</p>
                            <button className="regl-button" onClick={handleReglementFlip}>Afficher le règlement</button>
                        </div>
                        <div className="reglement-back">
                            <p className="regl-text">Les joueurs ne peuvent participer que dans une seule équipe pendant toute la durée du tournoi.</p>
                            <p className="regl-text">Tous les participants doivent <u>respecter l'esprit de fair-play et les règles du jeu.</u></p>
                            <p className="regl-text">Les participants doivent être disponibles pour les phases en ligne.</p>
                            <p className="regl-text">Les décisions de l'arbitrage pendant le tournoi sont <u>finales et sans appel.</u></p>
                            <label>
                                <input className="check" type="checkbox" checked={reglementChecked} onChange={handleReglementCheck} />
                                J'ai bien lu. J'approuve l'ensemble du règlement.
                            </label>
                            <button className="regl-button" onClick={handleReglementFlip}>Retour</button>
                        </div>
                    </div>
                </div>
                <div className={`dates ${datesFlipped ? 'flipped' : ''}`}>
                    <div className="dates-inner">
                        <div className="dates-front">
                            <p className="dates">Jetons un oeil au calendrier des évènements !</p>
                            <button className="dates-button" onClick={handleDatesFlip}>Calendrier des évènements</button>
                        </div>
                        <div className="dates-back">
                            <p className="dates-text">Avant tout, les inscriptions doivent être complètes et conformes aux exigences avant la date limite fixée par l'organisation.</p>
                            <p className="dates-text">Les participants doivent s'assurer de la stabilité de leur connexion internet pour les phases en ligne</p>
                            <p className="dates-text">Le premier jour du tournoi sera le Samedi matin 8 Février 2025 et déterminera les 50 premiers finalistes du tournoi lors de trois parties de 100 joueurs en mode OG.</p>
                            <p className="dates-text">Le Samedi après-midi 8 Février 2025. Les 50 derniers finalistes s'y qualifieront lors de 3 autres parties de 100 joueurs en mode OG.</p>
                            <p className="dates-text">La remise ainsi que la finale se fera le Dimanche 9 Février 2025. À 16h, la finale se fera. À 18h, <u>remise des récompenses par les élus et les partenaires</u></p>
                            <label>
                                <input className="check" type="checkbox" checked={datesChecked} onChange={handleDatesCheck} />
                                J'ai bien pris connaissance des dates importantes.
                            </label>
                            <button className="dates-button" onClick={handleDatesFlip}>Retour</button>
                        </div>
                    </div>
                </div>
                <div className="discord">
                    <p className="discord-text">Pour toutes annonces de dernières minutes ou décisions de l'Organisation, il est recommendé de rejoindre le Discord de la ville de Nevers !</p>
                    <a href="https://discord.gg/XTNmeqmd59">
                        <img src="../image/discord.png" alt="Discord" />
                    </a>
                </div>
            </div>
            <button 
                className={`register-button ${allChecked ? 'enabled' : 'disabled'}`} 
                disabled={!allChecked}
                onClick={handleButtonClick}
            >
                S'inscrire
            </button>
            <p className="credit"><u>made by Evan VERPLAETSE and Titouan BEAUREPAIRE</u></p>
        </main>
    );
}

export default Info;