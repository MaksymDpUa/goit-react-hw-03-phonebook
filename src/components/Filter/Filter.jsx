import { nanoid } from 'nanoid';
import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label htmlFor={inputFilterId} className={css.lableFilter}>Find your contact</label>
          <input
              className={css.inputFilter}
        name="filter"
        value={value}
        onChange={onChange}
        id={inputFilterId}
      ></input>
    </>
  );
};
