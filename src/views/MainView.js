import  HeroSection from '../components/Section1/HeroSection';
import Customise from '../components/Section2/Customise';
import Support from '../components/Section3/Support';
import Advantage from '../components/Section4/Advantage';
import Build from '../components/Section5/Build';
import Working from '../components/Section6/Working';
import Pricing from '../components/Section7/Pricing';
import Footer from '../components/Section8/Footer';

const AdminView = () => {
	return (
		<>
			<HeroSection />
			<Customise />
			<Support />
			<Advantage/>
			<Build />
			<Working/>
			<Pricing/>
			<Footer/>
		</>
	);
};

export default AdminView;
