/**
 * Valide les props d'un composant selon les PropTypes définis
 * @param {Object} props - Les props reçues par le composant
 * @param {Object} propTypes - Les PropTypes du composant
 * @param {string} componentName - Le nom du composant (pour les messages d'erreur)
 */
export function validateProps(
  props,
  propTypes,
  componentName
) {
  if (process.env.NODE_ENV !== "development") {
    return; // Ne valide qu'en développement
  }

  Object.keys(propTypes).forEach((propName) => {
    const propType = propTypes[propName];
    const propValue = props[propName];

    // Vérifie si la prop est requise
    const isRequired =
      propType.isRequired !== undefined;
    const validator = isRequired
      ? propType.isRequired
      : propType;

    // Vérifie si la prop manque et est requise
    if (
      isRequired &&
      (propValue === undefined ||
        propValue === null)
    ) {
      console.error(
        `PropTypes Error: La prop '${propName}' est requise dans '${componentName}' mais sa valeur est '${propValue}'.`
      );
      return;
    }

    // Utilise le validateur PropTypes pour vérifier le type
    const error = validator(
      props,
      propName,
      componentName,
      "prop",
      null,
      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    );

    if (error) {
      console.error(
        `PropTypes Error dans '${componentName}':`,
        error.message
      );
    }
  });
}
