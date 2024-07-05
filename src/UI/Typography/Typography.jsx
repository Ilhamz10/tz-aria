import DynamicTypography from './components/DynamicTypography';

import cls from './Typography.module.css';

/* eslint-disable react/prop-types */
const Typography = ({ size = 'sm', tag = 'p', weight = 'regular', children, className }) => {
	const combinedClassName = `${cls[size]} ${cls[weight]} ${className} ${cls.text}`.trim();

	return (
		<DynamicTypography
			tag={tag}
			className={combinedClassName}>
			{children}
		</DynamicTypography>
	);
};

export default Typography;
