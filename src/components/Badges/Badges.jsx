import Badge from '../Badge/Badge';

import cls from './Badges.module.css';
import PlayStoreIcon from '../../assets/icons/playStore-icon.svg?react';
import AppStoreIcon from '../../assets/icons/appStore-icon.svg?react';

const Badges = () => {
	return (
		<div className={cls.badges}>
			<Badge Icon={PlayStoreIcon} subText='get it on' text='Google play' />
			<Badge Icon={AppStoreIcon} subText='Available on the' text='App Store' />
		</div>
	);
};

export default Badges;
