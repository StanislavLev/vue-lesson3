import { mount} from 'vue-test-utils';
import SortSection from '../src/components/SortSection.vue';
import expect from 'expect';


describe ('SortSection', () => {
  it('defaults values before sort', ()=> {
    let wrapper = mount(SortSection);
    expect(wrapper.vm.sortedByName).toBe(false);
    expect(wrapper.vm.reversed).toBe(false);
  });
});