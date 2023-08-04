// formUtils.js
export const handleBlur = (fieldName, fieldValue, setError) => {
    if (fieldValue.trim() === '') {
      setError(true);
    }
  };
  