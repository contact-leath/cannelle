const { TabBar, Fab, CANNELLE_TABS } = window.CannelleDesignSystem_298ff7;

function App() {
  const [route, setRoute] = React.useState('accueil');
  const tab = ['accueil','recettes','menu','courses'].includes(route) ? route : (route === 'saison' ? 'accueil' : 'recettes');
  const Screen = { accueil: HomeScreen, recettes: RecipesScreen, detail: DetailScreen, menu: MenuScreen, courses: CoursesScreen, saison: SaisonScreen }[route];
  const showFab = route === 'recettes' || route === 'accueil';
  return <div style={{position:'relative',width:'100%',height:'100%',background:'var(--bg)',overflow:'hidden',display:'flex',flexDirection:'column'}}>
    <div style={{flex:1,overflowY:'auto',padding:'26px 16px 108px'}}>
      <Screen go={setRoute} />
    </div>
    {showFab ? <Fab style={{position:'absolute',right:16,bottom:96}} onClick={() => setRoute('detail')} /> : null}
    <div style={{position:'absolute',left:16,right:16,bottom:16}}>
      <TabBar items={CANNELLE_TABS} active={tab} onChange={setRoute} />
    </div>
  </div>;
}
window.App = App;
