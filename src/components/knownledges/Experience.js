import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3> Experiences</h3>
      <div className="exp-1">
        <h4> SuperMap - Lead Développeur SIG | F&MMCI</h4>
        <h5>Jan. 2024 - présent (Cocody, Côte d'Ivoire)</h5>
        <p>
          <ul className="square-bullets">
            <li>
              Participé au développement d'application SIG de Cacao avec
              SuperMap Iportal et Iclient.
            </li>
            <li>
              Hébergé des cartes géospatiales sur Iserver, facilitant l'accès et
              l'interaction avec les données cartographiques pour les
              utilisateurs finaux.
            </li>
            <li>
              Collaboré avec des équipes pour comprendre les besoins des
              utilisateurs et fournir un support technique de base, tout en
              créant des visualisations cartographiques simples et efficaces.
            </li>
          </ul>
        </p>
      </div>
      <div className="exp-2">
        <h4>Développeur web C# | CNTIG</h4>
        <h5>Fév. 2023 - Nov. 2023 (Cocody, Côte d'Ivoire)</h5>
        <p>
        <ul className="square-bullets">
            <li>
              Détection et résolution rapide des anomalies,garantissant une expérience utilisateur sans faille.
            </li>
            <li>
              Pilotagecde l'identification des exigences d'intégration de l'API SuperGéo afin d'améliorer l'affichage de cartes interactives dans certaines applications.
            </li>
            <li>
             Mise en place d'un système d'importation des données dans SQL SERVER.
            </li>
          </ul>
        </p>
      </div>
      <div className="exp-3">
        <h4>Analyste programmeur PHP/Laravel (Télétravail)</h4>
        <h5>Mars. 2022 - présent (France)</h5>
        <p>
            <ul className="square-bullets">
                <li>
                 Participation active à la conception d'une application dédiée aux commerciaux (CRM) en cours de développement.
                </li>
                <li>
                    Actuellement impliqué dans la création d'une application de sondage destinée au élections en France.
                </li>
            </ul>
        </p>
      </div>

      <div className="exp-4">
        <h4>Analyste programmeur | MYBEATUS</h4>
        <h5>Octobre. 2020 - Avr. 2021 (Bénin)</h5>
        <p>
            <ul className="square-bullets">
                <li>
                  Analyse approfondie des codes existants avec propositions de nouvelles lignes de codes développées en 
                  utilisant les technologies Laravel et Angular
                </li>
                <li>
                    Conception et dispensation de formations destinées aux enseignants et aux parents d'élèves pour une utilisation optimale de la plateforme mybeatus.com
                </li>
            </ul>
        </p>
      </div>

      <div className="exp-4">
        <h4>Analyste programmeur | Poste du Bénin</h4>
        <h5>Avr. 2020 - Octobre. 2020 (Bénin)</h5>
        <p>
            <ul className="square-bullets">
                <li>
                  Mise en place d'une application de courier retour et de gestion de stock pour le compte de mon mémoire
                </li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default Experience;
