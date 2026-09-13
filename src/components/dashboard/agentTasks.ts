// Quels livrables appartiennent à quel agent.
//
// Ce fichier tenait la liste À LA MAIN, pour huit rôles sur dix-huit, et citait
// cinq identifiants qui n'existaient nulle part — « brand », « video »,
// « assets », « analytics », « finance ». L'activité affichée au tableau de bord
// ne comptait donc rien pour la plupart des agents, sans que rien ne le signale.
//
// La même liste vivait AUSSI, recopiée, dans modules/chief/ChiefModule.tsx.
//
// Elle est maintenant dérivée de ROLE_TASKS, qui est la seule table où l'on
// déclare ce qu'un métier produit. On ne la réexporte ici que pour ne pas casser
// les imports existants.
export { AGENT_TASKS } from '../../data/connectors'
