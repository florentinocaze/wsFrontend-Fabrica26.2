import DamageIcon from "../assets/damage-icon.png"
import SupportIcon from "../assets/support-icon.png"
import TankIcon from "../assets/tank-icon.png"

function HeroCard({ hero }) {
    let heroIcon = DamageIcon;
    if (hero.role === "support") heroIcon = SupportIcon; 
    if (hero.role === "tank") heroIcon = TankIcon; 

    const heroInfo = {
      ...hero, 
      heroRoleIcon: heroIcon
    }

    return (
    <div className="hero-card">
      <img className="hero-icon" src={heroInfo.portrait} alt={heroInfo.name} />

      <div className="hero-info">
        <img className="role-icon" src={heroInfo.heroRoleIcon} alt={hero.role} loading="lazy"/>

        <h3>{heroInfo.name}</h3>
      </div>
    </div>
  );
}

export default HeroCard;
