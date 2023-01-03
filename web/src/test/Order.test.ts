import { render } from '@testing-library/vue';
import AppVue from '../App.vue';

describe('Page Order', () => {
  it('should be able to render page', () => {
    const { getByTestId, getByRole } = render(AppVue);
    expect(getByTestId('test-id-cashforce-logo')).toBeTruthy();
    expect(getByTestId('test-id-menu-item-notes')).toBeTruthy();
    expect(
      getByRole('heading', { name: 'Notas fiscais' }),
    ).toBeTruthy();
  });
})
