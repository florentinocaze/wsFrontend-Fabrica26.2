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
    <div className="hero-card mb-16 mx-16 font-bold border rounded-sm bg-white border-dark-blue-1 hover:scale-110 transition-transform duration-300">
      <img className="hero-icon p-0.5 w-48 h-48 object-cover" src={heroInfo.portrait} alt={heroInfo.name} />

      <div className="hero-info p-4 gap-2 flex flex-row text-center justify-center items-center">
        <img className="role-icon w-10 rounded-sm" src={heroInfo.heroRoleIcon} alt={hero.role} loading="lazy"/>

        <h3 className="text-dark-blue-1">{heroInfo.name}</h3>
      </div>
    </div>
  );
}

export default HeroCard;
