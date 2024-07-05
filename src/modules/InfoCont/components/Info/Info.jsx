/* eslint-disable react/prop-types */
import Typography from '../../../../UI/Typography/Typography';

import cls from './Info.module.css';

const Info = ({ infoTitle, infoText }) => {
	return (
		<div className={cls.info}>
			<Typography className={cls.infoTitle} tag='h2' size='xxl' weight='bold'>
				{infoTitle}
			</Typography>
			<Typography className={cls.infoText} size='sm'>
				{infoText}
			</Typography>
		</div>
	);
};

export default Info;
