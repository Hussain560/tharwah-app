function Card({ children, className = '' }) {
  // Set default background only if no background color classes are provided in className
  const defaultClasses = className.includes('bg-') ? '' : 'bg-white';
  
  return (
    <div className={`${defaultClasses} rounded-xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
