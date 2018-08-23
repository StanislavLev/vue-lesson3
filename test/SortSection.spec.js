import { mount} from 'vue-test-utils';
import SortSection from '../src/components/SortSection.vue';
import expect from 'expect';


describe ('SortSection', () => {
  
  let wrapper;
  beforeEach(()=> {
    wrapper = mount(SortSection);
  });
  
  it('hides the arrows, default values before click sortByNameBtn are sortedByName = false, namesAtoZ = true', ()=> {
    expect(wrapper.vm.sortedByName).toBe(false);
    expect(wrapper.vm.namesAtoZ).toBe(true);
    expect(wrapper.find('#sortByNameBtn .arrowAndX').hasStyle('display', 'none')).toBe(true);
  });
  
  it('displays cancelBtn and arrowAp when sortByNameBtn is clicked,' + 
     'sortedByName = true, namesAtoZ = true', () => {
    wrapper.find('#sortByNameBtn').trigger('click');
    expect(wrapper.find('#sortByNameBtn .arrowAndX').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.find('#sortByNameBtn .cancelBtn').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.find('#sortByNameBtn .arrowUp').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.find('#sortByNameBtn .arrowDn').hasStyle('display', 'none')).toBe(true);
    expect(wrapper.vm.sortedByName).toBe(true);
    expect(wrapper.vm.namesAtoZ).toBe(true);
  });
  
  it('displays cancelBtn and arrowDn when sortByNameBtn is clicked twice,' + 
     'sortedByName = true, namesAtoZ = false', () => {
    wrapper.find('#sortByNameBtn').trigger('click');
    wrapper.find('#sortByNameBtn').trigger('click');
    expect(wrapper.find('#sortByNameBtn .arrowAndX').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.find('#sortByNameBtn .cancelBtn').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.find('#sortByNameBtn .arrowUp').hasStyle('display', 'none')).toBe(true);
    expect(wrapper.find('#sortByNameBtn .arrowDn').hasStyle('display', 'none')).toBe(false);
    expect(wrapper.vm.sortedByName).toBe(true);
    expect(wrapper.vm.namesAtoZ).toBe(false);
  });
  
  it('hides the arrows, and assign default values when cancelBtn is clicked' , () => {
    wrapper.find('#sortByNameBtn').trigger('click');
    wrapper.find('#sortByNameBtn').trigger('click');
    wrapper.find('#sortByNameBtn .cancelBtn').trigger('click');
    expect(wrapper.find('#sortByNameBtn .arrowAndX').hasStyle('display', 'none')).toBe(true);
    expect(wrapper.vm.sortedByName).toBe(false);
    expect(wrapper.vm.namesAtoZ).toBe(true);
  });

});