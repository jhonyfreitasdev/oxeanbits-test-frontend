import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MoviesGrid } from './MoviesGrid';

test('renders MoviesList component', () => {
    const { getByText } = render(<MoviesGrid />);
    
    expect(getByText('Export PDF')).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
});