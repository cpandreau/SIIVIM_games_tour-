import React, { useState } from "react";
import "./Info.css";

const Info = () => {
    const [eligibilityFlipped, setEligibilityFlipped] = useState(false);
    const [reglementFlipped, setReglementFlipped] = useState(false);
    const [eligibilityChecked, setEligibilityChecked] = useState(false);
    const [reglementChecked, setReglementChecked] = useState(false);

    const handleEligibilityFlip = () => {
        setEligibilityFlipped(!eligibilityFlipped);
    };

    const handleReglementFlip = () => {
        setReglementFlipped(!reglementFlipped);
    };

    const handleEligibilityCheck = () => {
        setEligibilityChecked(!eligibilityChecked);
    };

    const handleReglementCheck = () => {
        setReglementChecked(!reglementChecked);
    };

    return (
        <main>
            <div className="info">
                <p className="inst"><u>Informations & Instructions</u></p>
                <p className='pres'>Organisé par la ville de <u>Nevers</u>, ce tournoi se déroule du <u>8 Février 2025</u> au <u>9 Février 2025</u> sur Fortnite.</p>
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
                            <p className="eli-text">Interdit aux employés et agents de Epic Games ou membre du Comité d'organisation et leur famille immédiate.</p>
                            <p className="eli-text">Au moins un joueur de l'équipe doit être domicilié dans une ville éligible.</p>
                            <p className="eli-text">Les joueurs doivent avoir un compte Epic Games et Fortnite valide.</p>
                            <p className="eli-text">Les joueurs doivent être âgés d'au moins 15 ans à la date du 6 janvier 2025.</p>
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
            </div>
        </main>
    );
}

export default Info;