import Typography from './UI/Typography/Typography';
import InfoCont from './modules/InfoCont/InfoCont';
import Button from './UI/Button/Button';
import Comments from './modules/Comments/Comments';

import cls from './App.module.css';
import Background from './components/Background/Background';
import Badges from './components/Badges/Badges';

function App() {
	return (
		<main className='wrapper'>
			<Background />
			<Typography className={cls.mainTitle} size='xxxl' weight='bold' tag='h1'>
				Do you want to Learn more About cryptocurrencies{' '}
				<span className={cls.textGradient}>
					quickly and <span className={cls.fullText}>easily ?</span>
				</span>
			</Typography>
			<Typography size='xl' className={cls.mainText}>
				Subscribe to our channel to learn more
			</Typography>
			<InfoCont className={cls.infoCont} />
			<Button className={cls.mainButton}>
				<Typography
					className={cls.buttonText}
					size='lg'
					tag='span'
					weight='medium'>
					Join Whatsapp
				</Typography>
			</Button>
			<Badges />
			<Comments />
		</main>
	);
}

export default App;
