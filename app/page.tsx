const freeFeatures = [
  "10 sorties et 10 bonnes adresses",
  "5 restaurants dans « À essayer »",
  "2 scans de tickets pour tester",
  "Statistiques du mois",
  "Carte de vos propres adresses",
  "Sauvegarde de vos données",
];

const completeFeatures = [
  "Sorties, adresses et scans illimités",
  "Liste « À essayer » illimitée",
  "Bilans sur 3 mois et sur l’année",
  "Restaurants autour de vous",
  "Rapports PDF à conserver ou partager",
  "Toutes les futures améliorations incluses",
];

function StoreButton({ small = false }: { small?: boolean }) {
  return (
    <a className={`store-button${small ? " small" : ""}`} href="#telecharger">
      <span className="store-dot" aria-hidden="true">●</span>
      <span><small>Bientôt disponible sur</small><strong>l’App Store</strong></span>
    </a>
  );
}

function AppPreview() {
  return (
    <div className="phone-wrap" aria-label="Aperçu de l’application Mes Sorties Resto">
      <div className="halo" />
      <div className="float-card float-card-a"><i>⌖</i><span><b>Adresse retrouvée</b><small>Prête pour l’itinéraire</small></span></div>
      <div className="float-card float-card-b"><i>✓</i><span><b>Ticket scanné</b><small>42,80 € détectés</small></span></div>
      <div className="iphone">
        <div className="notch" />
        <div className="screen">
          <div className="status"><b>9:41</b><span>● ◒ ▰</span></div>
          <div className="screen-title"><h3>Mes sorties</h3><span>⚙</span></div>
          <div className="spend"><span><small>Dépensé ce mois-ci</small><b>181,60 €</b></span><span><b>5</b><small>ce mois-ci</small></span></div>
          <div className="list-title"><b>Sorties récentes</b><span>Tout voir</span></div>
          <div className="outing"><i>♨</i><span><b>Le Petit Comptoir</b><small>Française · Hier</small></span><strong>42,80 €</strong></div>
          <div className="outing"><i className="sage">⌁</i><span><b>Casa Alba</b><small>Italienne · Il y a 6 jours</small></span><strong>56,00 €</strong></div>
          <div className="list-title"><b>À essayer</b><span>Voir</span></div>
          <div className="try-grid"><div><i>♨</i><b>Épices &amp; Riz</b><small>Paris</small></div><div><i>⌁</i><b>La Verrière</b><small>Lyon</small></div></div>
          <div className="tabs"><span className="active">♨<small>Sorties</small></span><span>⌖<small>Adresses</small></span><span>▥<small>Stats</small></span><span>◇<small>Carte</small></span></div>
        </div>
      </div>
    </div>
  );
}

function ReceiptVisual() {
  return <div className="visual receipt-visual"><div className="scan-frame" /><div className="receipt"><small>MES SORTIES RESTO</small><b>LE PETIT COMPTOIR</b><hr/><p><span>Dîner</span><span>42,80 €</span></p><p><b>TOTAL</b><b>42,80 €</b></p><div>▥ ▥▥ ▥ ▥▥▥ ▥</div></div><span className="success">✓ Informations détectées</span></div>;
}

function MapVisual() {
  return <div className="visual map-visual"><i className="road r1"/><i className="road r2"/><i className="road r3"/><span className="pin p1">♨</span><span className="pin p2">♥</span><span className="pin p3">✓</span><div className="place"><span><b>Le Petit Comptoir</b><small>À 650 m de vous</small></span><strong>Y aller →</strong></div></div>;
}

function StatsVisual() {
  return <div className="visual stats-visual"><small>TOTAL CETTE ANNÉE</small><b>1 248,30 €</b><span>38 sorties · 24 restaurants</span><div className="bars"><i/><i/><i/><i/><i/><i className="hot"/></div><div className="months"><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span></div></div>;
}

export default function Home() {
  return (
    <main>
      <header>
        <a className="brand" href="#accueil"><img src="/app-icon.png" width="44" height="44" alt=""/><b>Mes Sorties Resto</b></a>
        <nav><a href="#fonctionnalites">Fonctionnalités</a><a href="#offre">L’offre</a><a href="#confidentialite">Confidentialité</a></nav>
        <StoreButton small />
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="pill">● L’app iPhone de vos souvenirs gourmands</div>
          <h1>Vos meilleures tables.<br/><em>Toujours avec vous.</em></h1>
          <p>Sorties, bonnes adresses, tickets, dépenses et envies : gardez tout ce qui compte après un bon restaurant, sans jamais refaire deux fois le même travail.</p>
          <div className="hero-actions"><StoreButton/><a href="#fonctionnalites">Découvrir l’application ↓</a></div>
          <small className="micro">Téléchargement gratuit · Achat unique à 9,99 € pour la Version complète</small>
          <div className="trust"><span><b>Sans compte</b><small>Vos données restent locales</small></span><span><b>Sans publicité</b><small>Aucun suivi publicitaire</small></span><span><b>Sans abonnement</b><small>Un achat, une fois</small></span></div>
        </div>
        <AppPreview />
      </section>

      <div className="marquee"><span>Un dîner entre amis.</span><i>•</i><span>Une adresse à recommander.</span><i>•</i><span>Un souvenir à retrouver.</span></div>

      <section className="features section" id="fonctionnalites">
        <div className="intro"><small>Tout ce qu’il faut. Rien de trop.</small><h2>Une mémoire pour vos sorties,<br/>pas un formulaire de plus.</h2><p>Chaque fonction vous fait gagner du temps aujourd’hui et retrouver facilement vos bonnes expériences demain.</p></div>
        <article className="feature"><div className="feature-copy"><span>01</span><small>Souvenirs</small><h3>Une sortie enregistrée, une adresse retrouvée.</h3><p>Notez le restaurant, la date, la dépense et les personnes présentes. La bonne adresse rejoint automatiquement votre carnet, sans double saisie.</p></div><div className="visual memory-visual"><div className="memory back"><b>12</b><span>bonnes adresses</span><small>enregistrées automatiquement</small></div><div className="memory front"><i>♨</i><span><b>Le Petit Comptoir</b><small>Française · Paris</small></span><strong>★★★★★</strong></div><em>✓ Une seule saisie</em></div></article>
        <article className="feature reverse"><div className="feature-copy"><span>02</span><small>Scan intelligent</small><h3>Photographiez le ticket. Le reste se remplit.</h3><p>Le nom du restaurant, la date et le montant sont détectés. Vous vérifiez toujours le résultat avant de l’enregistrer.</p></div><ReceiptVisual/></article>
        <article className="feature"><div className="feature-copy"><span>03</span><small>Carte</small><h3>Vos tables préférées, au bon endroit.</h3><p>Visualisez vos adresses, découvrez les restaurants autour de vous et lancez votre itinéraire dans Plans.</p></div><MapVisual/></article>
        <article className="feature reverse"><div className="feature-copy"><span>04</span><small>Statistiques</small><h3>Comprenez vos habitudes, simplement.</h3><p>Mois, trimestre ou année : retrouvez vos dépenses, les cuisines que vous aimez et vos restaurants les plus visités.</p></div><StatsVisual/></article>
      </section>

      <section className="steps section"><div><small>Du restaurant au souvenir</small><h2>Trois gestes.<br/>C’est enregistré.</h2><p>Pas de compte à créer, pas de configuration compliquée. L’application est prête dès le premier lancement.</p></div><ol><li><i>1</i><span><b>Ajoutez votre sortie</b><p>Saisissez le nom ou choisissez une adresse connue.</p></span></li><li><i>2</i><span><b>Scannez ou complétez</b><p>Photographiez le ticket, ajoutez votre note et vos souvenirs.</p></span></li><li><i>3</i><span><b>Retrouvez tout</b><p>Adresse, itinéraire, statistiques et historique restent à portée de main.</p></span></li></ol></section>

      <section className="pricing section" id="offre">
        <div className="intro center"><small>Commencez gratuitement</small><h2>Essayez vraiment l’app.<br/>Décidez ensuite.</h2><p>Vous téléchargez d’abord Mes Sorties Resto gratuitement. La Version complète se débloque ensuite dans l’application par un achat unique.</p></div>
        <div className="prices"><article><div className="price-head"><small>Découverte</small><b>Gratuit</b><p>Pour prendre en main toutes les fonctions essentielles.</p></div><ul>{freeFeatures.map(x=><li key={x}>✓ <span>{x}</span></li>)}</ul><a href="#telecharger">Télécharger gratuitement</a></article><article className="featured"><em>Le choix simple</em><div className="price-head"><small>Version complète</small><b>9,99 €</b><p>Achat unique. Pas maintenant, pas plus tard : jamais d’abonnement.</p></div><ul>{completeFeatures.map(x=><li key={x}>✓ <span>{x}</span></li>)}</ul><a href="#telecharger">Télécharger puis débloquer</a></article></div>
        <p className="pricing-note">Vos données restent toujours consultables et modifiables, même si vous atteignez une limite gratuite.</p>
      </section>

      <section className="privacy section" id="confidentialite"><div className="privacy-art"><div className="shield">⌾</div><span className="chip c1">Aucun compte</span><span className="chip c2">Stockage local</span><span className="chip c3">Aucun suivi</span></div><div><small>Votre carnet reste votre carnet</small><h2>Vos adresses ne regardent que vous.</h2><p>Vos notes, dépenses, tickets et photos restent stockés localement sur votre iPhone. Rien n’est partagé sans votre action.</p><ul><li>Pas de profil publicitaire</li><li>Pas de revente de données</li><li>Sauvegarde exportable à tout moment</li></ul></div></section>

      <section className="faq section"><div className="intro center"><small>Questions fréquentes</small><h2>Avant de passer à table.</h2></div><div className="faq-list"><details><summary>Faut-il payer avant de télécharger l’application ?<span>+</span></summary><p>Non. Vous téléchargez gratuitement l’application puis choisissez, seulement si vous le souhaitez, l’achat unique de la Version complète.</p></details><details><summary>Est-ce un abonnement ?<span>+</span></summary><p>Non. La Version complète coûte 9,99 € une seule fois et peut être restaurée avec votre compte Apple.</p></details><details><summary>L’application a-t-elle besoin d’un compte ?<span>+</span></summary><p>Non. Vos informations sont enregistrées localement sur votre iPhone.</p></details><details><summary>Puis-je enregistrer une sortie où j’ai été invité ?<span>+</span></summary><p>Oui. La sortie sera conservée sans ajouter de dépense.</p></details><details><summary>Mes anciennes données seront-elles bloquées ?<span>+</span></summary><p>Jamais. Elles restent accessibles, modifiables, partageables et exportables.</p></details></div></section>

      <section className="download section" id="telecharger"><img src="/app-icon.png" width="112" height="112" alt="Icône Mes Sorties Resto"/><small>Bientôt sur iPhone</small><h2>La prochaine bonne adresse<br/>commence ici.</h2><p>Téléchargez gratuitement l’application, enregistrez vos premières sorties et passez à la Version complète uniquement quand vous en avez envie.</p><StoreButton/><span>Exclusivement conçu pour iPhone · iOS</span></section>

      <footer><a className="brand" href="#accueil"><img src="/app-icon.png" width="40" height="40" alt=""/><b>Mes Sorties Resto</b></a><nav><a href="#fonctionnalites">Fonctionnalités</a><a href="#offre">Tarif</a><a href="#confidentialite">Confidentialité</a></nav><p>Les bons moments passent. Les bonnes adresses restent.</p><small>© 2026 Mes Sorties Resto. Conçu avec soin en France.</small></footer>
    </main>
  );
}
