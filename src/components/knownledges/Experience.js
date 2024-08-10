import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3> Experiences</h3>
      <div className="exp-1">
        <h4> Développeur Full stack & Mobile | Edn computing group</h4>
        <h5> 04/2021 - Présent - présent (AKPAKPA, Bénin)</h5>
        <p>
          <ul className="square-bullets">
            <li>
              Concevoir des applications web en utilisant la méthode Agile,
              comme une application de gestion des salaires et des employés avec
              Laravel et React.js.
            </li>
            <li>
              Créer et gérer des bases de données avec MySQL tout en développant
              des services backend efficaces pour une intégration fluide des
              fonctionnalités.
            </li>
            <li>
              Développer et intégrer des services et des API RESTful pour
              garantir une communication fluide entre les applications et les
              serveurs, en utilisant Insomnia et Postman pour les tests.
            </li>

            <li>
              Gérer la configuration et la maintenance des serveurs pour
              garantir le bon fonctionnement des applications.
            </li>

            <li>
              Rédiger la documentation des applications développées pour assurer
              une utilisation et une maintenance efficaces
            </li>
          </ul>
        </p>
      </div>

      <div className="exp-2">
        <h4>Analyste programmeur PHP/Laravel (Télétravail)</h4>
        <h5>Mars. 2022 - présent (France)</h5>
        <p>
          <ul className="square-bullets">
            <li>
              Collaborer avec des développeurs à la conception et à la
              réalisation de l'application CRM "Chef des Ventes" (CDV) dédiée
              aux commerciaux, en utilisant Laravel.
            </li>
            <li>
              Actuellement impliqué dans la création d'une application de
              sondage destinée au élections en France.
            </li>
          </ul>
        </p>
      </div>

      <div className="exp-3">
        <h4>Analyste programmeur | MYBEATUS</h4>
        <h5>Octobre. 2020 - Avr. 2021 (Bénin)</h5>
        <p>
          <ul className="square-bullets">
            <li>
              Analyse approfondie des codes existants avec propositions de
              nouvelles lignes de codes développées en utilisant les
              technologies Laravel et Angular
            </li>
            <li>
              Conception et dispensation de formations destinées aux enseignants
              et aux parents d'élèves pour une utilisation optimale de la
              plateforme mybeatus.com
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
              Mise en place d'une application de courier retour et de gestion de
              stock pour le compte de mon mémoire
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Experience;
