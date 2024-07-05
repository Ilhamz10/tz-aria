/* eslint-disable react/prop-types */
import Typography from '../../UI/Typography/Typography';

import cls from './Badge.module.css'

const Badge = ({ text, subText, Icon }) => {
	return (
		<div className={cls.badge}>
			<Icon />
			<div className={cls.badgeTextCont}>
				<Typography className={cls.badgeText} size='xxs' tag='span'>{subText}</Typography>
				<Typography className={cls.badgeText} size='md'>{text}</Typography>
			</div>
		</div>
	);
};

export default Badge;
