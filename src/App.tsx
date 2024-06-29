import './App.css';
import TreeView from '@/components/experiments/TreeView';
import { SelectionProvider } from '@/context/SelectionContext';
import TechBlog from '@/components/content/TechBlog';


function App() {

  return (
    <SelectionProvider>
      <div className="flex">
        <TreeView />
        <TechBlog />
      </div>
    </SelectionProvider>
  );
}

export default App;
