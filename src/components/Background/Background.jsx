import cls from './Background.module.css'
import Bitcoin from '../../assets/icons/Bitcoin.svg?react';
import Litecoin from '../../assets/icons/Litecoin.svg?react';
import Ethereum from '../../assets/icons/Ethereum.svg?react';

const Background = () => {
	return (
		<>
			<Bitcoin className={`${cls.backgroundIcon} ${cls.bitcoin}`} />
			<Litecoin className={`${cls.backgroundIcon} ${cls.litecoin}`} />
			<Ethereum className={`${cls.backgroundIcon} ${cls.ethereum}`} />
		</>
	);
};

export default Background;
