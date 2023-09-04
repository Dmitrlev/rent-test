import styles from './SelectProperty.module.css';
import PropertyIcon from '../../../assets/icons/Property.png';
import CarRentalIcon from '../../../assets/icons/CarRental.png';
import ToursIcon from '../../../assets/icons/Tours.png';
import {useState} from "react";
import {CustomButton} from "../../Common/Buttons/Dashboard/SelectButton/SelectButton";
import {useDispatch} from "react-redux";
import {setCurrentBannerState} from "../../../store/slices/selectTest";

export const SelectProperty = () => {

  const dispatch = useDispatch();
  const [buttons, setButtons] = useState(SelectPropertyButtonData);

  const changeSelect = (currentBannerState, index) => {
    console.log(currentBannerState)
    setButtons(buttons.map((button, i) => ({...button, active: i === index})));
    dispatch(setCurrentBannerState({currentBannerState}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.fon}></div>
      {buttons.map((button, index) => (
        <CustomButton
          key={index}
          title={button?.title}
          icon={button?.icon}
          callback={() => changeSelect(button?.name, index)}
          active={button?.active}
        />
      ))}
    </div>
  );
};

const SelectPropertyButtonData = [
  {
    name: 'Property',
    title: 'Property',
    icon: PropertyIcon,
    active: false,
  },
  {
    name: 'CarRental',
    title: 'Car Rental',
    icon: CarRentalIcon,
    active: true
  },
  {
    name: 'Tours',
    title: 'Tours',
    icon: ToursIcon,
    active: false
  }
];