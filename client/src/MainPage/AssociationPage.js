const AssociationPage = () => {
  return (
    <>
      <div>
        <h1>Association Lovelies People</h1>
        <p>Lovelies Premium Brand s'engage.</p>
        <p>
          Pour chaque achat sur notre boutique Lovelies Africa Business, nous
          dédions 2,5% par vente destinés aux projets caritatifs.
        </p>
      </div>

      <section className="descriptif_asso">
        <article>
          <img
            className="photos"
            src="../img/conception/village.jpg"
            alt="village Sénégal"
          />
        </article>
        <article>
          <h2>Être au service du bien commun</h2>
          <p>
            Pour chaque pays où nos articles sont confectionnés, nous consacrons
            2,5% des ventes réalisées en concrétisant des projets caritatifs
            afin d'aider la population dans leurs quotidiens.
          </p>
          <p>
            Ainsi, nous recevons pour donner à notre tour permettant ainsi de
            créer une chaîne de solidarité à notre échelle.
          </p>
        </article>
        <article>
          <h2>Changer des vies ne serait-ce que par un sourire</h2>
          <p>
            Tout au long de notre aventure, nous projetons de venir en aide à
            toutes les populations vulnérables et dans le besoin via des actions
            de distributions de produits de premières nécessités, d'éducation et
            d'environnement.
          </p>
          <button>
            <a href="/collection"> Je soutiens en achetant</a>
          </button>
        </article>
        <article>
          <img
            className="photos"
            src="../img/conception/enfants2.jpg"
            alt="enfants à l'école"
          />
        </article>
      </section>

      <section className="descriptif_asso">
        <article>
          <img
            className="photos"
            src="../img/conception/villageois.jpg"
            alt="villagois"
          />
        </article>
        <article>
          <h2>Pour un monde meilleur</h2>
          <p>
            Rendre à la communauté de la meilleure des manières en apportant une
            contribution positive à la société.
          </p>
        </article>
        <article>
          <h2>Car chacun peut apporter sa pierre à l'édifice</h2>
          <p>
            Nos prochaines missions consisteront à la plantation d'arbres et
            construction de puits dans les coins ruraux du Sénégal, grâce aux
            fonds récoltés par la vente de notre Collection d'éventail La
            Dakaroise confectionné à Dakar.
          </p>
          <button>
            {" "}
            <a href="/contact">J'offre une donation</a>
          </button>
        </article>
        <article>
          <img
            className="photos"
            src="../img/conception/villageoise.jpg"
            alt="villageoise"
          />
        </article>
      </section>
    </>
  );
};

export default AssociationPage;