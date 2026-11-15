const { Button, Fab, Chip, Badge, Toggle, TextField, Icon, Card, RecipeCard, TabBar, BottomSheet } = window.CannelleDesignSystem_298ff7;
const D = window.CannelleData;

function ScreenTitle({ children, right }) {
  return <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
    <h1 style={{fontFamily:'var(--font-display)',fontSize:28,lineHeight:1.15,margin:0,fontWeight:800}}>{children}</h1>
    {right ? <div style={{marginLeft:'auto'}}>{right}</div> : null}
  </div>;
}
function SectionTitle({ children, action, onAction }) {
  return <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:12}}>
    <h2 style={{fontFamily:'var(--font-display)',fontSize:19,margin:0,fontWeight:800}}>{children}</h2>
    {action ? <button onClick={onAction} style={{marginLeft:'auto',background:'none',border:'none',padding:0,cursor:'pointer',fontFamily:'var(--font-text)',fontSize:13.5,fontWeight:600,color:'var(--primary-dark)'}}>{action}</button> : null}
  </div>;
}
function Eyebrow({ children }) {
  return <span style={{fontSize:11.5,fontWeight:700,letterSpacing:'1.4px',textTransform:'uppercase',color:'var(--text3)'}}>{children}</span>;
}
function TopBar({ onBack, title, action }) {
  return <div style={{display:'flex',alignItems:'center',gap:10,height:44,marginBottom:6}}>
    <button onClick={onBack} style={{background:'none',border:'none',padding:0,cursor:'pointer',color:'var(--text)',display:'flex',alignItems:'center'}}><Icon name="chevron-left" size={26} /></button>
    <span style={{fontFamily:'var(--font-text)',fontWeight:700,fontSize:15}}>{title}</span>
    {action ? <div style={{marginLeft:'auto'}}>{action}</div> : null}
  </div>;
}

function HomeScreen({ go }) {
  return <div style={{display:'flex',flexDirection:'column',gap:26}}>
    <div>
      <Eyebrow>Mardi 9 juin</Eyebrow>
      <ScreenTitle>Bonsoir</ScreenTitle>
      <Card padding={16} style={{display:'flex',alignItems:'center',gap:14}}>
        <div style={{width:52,height:52,borderRadius:'var(--radius-field)',background:'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',flexShrink:0}} />
        <div style={{minWidth:0}}>
          <Eyebrow>Ce soir</Eyebrow>
          <div style={{fontWeight:700,fontSize:15,marginTop:2}}>Salade de lentilles tièdes</div>
          <div style={{fontSize:13,color:'var(--text2)',marginTop:2,display:'flex',alignItems:'center',gap:5}}><Icon name="clock" size={14} /> 25 min · tout est dans le frigo</div>
        </div>
      </Card>
    </div>
    <div>
      <SectionTitle action="Tout voir" onAction={() => go('saison')}>De saison</SectionTitle>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {D.saison.map(s => <Badge key={s.name} hue={s.hue}>{s.name}</Badge>)}
      </div>
    </div>
    <div>
      <SectionTitle action="Le Livre" onAction={() => go('recettes')}>Ajoutées récemment</SectionTitle>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
        {D.livre.slice(0,2).map(r => <RecipeCard key={r.id} title={r.title} time={r.time} onClick={() => go('detail')} badge={<Badge hue={r.hue} tone="light">{r.cat}</Badge>} />)}
      </div>
    </div>
    <div>
      <SectionTitle action="L'Atelier" onAction={() => go('recettes')}>En cours de test</SectionTitle>
      <Card padding={0}>
        {D.atelier.map((a,i) => <div key={a.id} style={{display:'flex',alignItems:'center',gap:12,padding:'14px 16px',borderTop:i?'0.5px solid var(--border-subtle)':'none'}}>
          <Icon name="flask" size={20} color="var(--myrtille-vivid)" />
          <span style={{fontSize:15,fontWeight:500}}>{a.title}</span>
          <span style={{marginLeft:'auto',fontSize:13,color:'var(--text3)'}}>{a.time}</span>
        </div>)}
      </Card>
    </div>
  </div>;
}

function RecipesScreen({ go }) {
  const [mode,setMode] = React.useState('livre');
  const [sheet,setSheet] = React.useState(false);
  const [filtre,setFiltre] = React.useState('tout');
  const list = mode === 'livre' ? D.livre : D.atelier;
  const shown = filtre === 'tout' ? list : list.filter(r => r.cat === filtre);
  return <div>
    <ScreenTitle right={<button onClick={() => setSheet(true)} style={{background:'none',border:'none',padding:0,cursor:'pointer',color:'var(--text)'}}><Icon name="filter" size={22} /></button>}>Recettes</ScreenTitle>
    <TextField icon="search" placeholder="Chercher une recette" style={{marginBottom:14}} />
    <div style={{display:'flex',gap:8,marginBottom:16}}>
      <Chip selected={mode==='livre'} onClick={() => setMode('livre')}>Livre · {D.livre.length}</Chip>
      <Chip selected={mode==='atelier'} onClick={() => setMode('atelier')}>Atelier · {D.atelier.length}</Chip>
    </div>
    {mode === 'atelier' ? <div style={{fontSize:13,color:'var(--text2)',marginBottom:14,lineHeight:1.5}}>Les idées et les essais en cours. Une recette passe au Livre quand elle est au point.</div> : null}
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
      {shown.map(r => <RecipeCard key={r.id} title={r.title} time={r.time} onClick={() => go('detail')} badge={<Badge hue={r.hue} tone="light">{r.cat}</Badge>} />)}
    </div>
    {sheet ? <Sheet onClose={() => setSheet(false)}>
      <BottomSheet title="Filtres" onClose={() => setSheet(false)}>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:18}}>
          {['tout','Entrée','Plat','Dessert'].map(k => <Chip key={k} selected={filtre===k} onClick={() => setFiltre(k)}>{k === 'tout' ? 'Tout' : k}</Chip>)}
        </div>
        <Toggle checked label="Seulement les recettes de saison" style={{marginBottom:18}} />
        <Button fullWidth onClick={() => setSheet(false)}>Voir les recettes</Button>
      </BottomSheet>
    </Sheet> : null}
  </div>;
}

function Sheet({ children, onClose }) {
  return <div style={{position:'absolute',inset:0,zIndex:5,display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
    <div onClick={onClose} style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.4)'}} />
    <div style={{position:'relative'}}>{children}</div>
  </div>;
}

function DetailScreen({ go }) {
  const r = D.recette;
  const [added,setAdded] = React.useState(false);
  return <div style={{margin:'-16px -16px 0'}}>
    <div style={{position:'relative',aspectRatio:'4/3',background:'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',display:'flex',alignItems:'flex-end'}}>
      <button onClick={() => go('recettes')} style={{position:'absolute',top:14,left:14,width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,0.92)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="chevron-left" size={22} /></button>
      <button style={{position:'absolute',top:14,right:14,width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,0.92)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="heart" size={20} color="var(--fraise-vivid)" /></button>
      <div style={{width:100+'%',padding:'40px 16px 14px',background:'var(--overlay-scrim)'}}>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#fff',margin:0,fontWeight:800,lineHeight:1.15}}>{r.title}</h1>
        <div style={{display:'flex',gap:14,marginTop:8,color:'rgba(255,255,255,0.92)',fontSize:13}}>
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon name="clock" size={15} /> {r.time}</span>
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon name="users" size={15} /> {r.parts}</span>
        </div>
      </div>
    </div>
    <div style={{padding:'18px 16px',display:'flex',flexDirection:'column',gap:22}}>
      <div style={{display:'flex',gap:8}}><Badge hue="fraise">{r.cat}</Badge><Badge hue="primary" tone="light">Du Livre</Badge></div>
      <Card>
        <SectionTitle>Ingrédients</SectionTitle>
        <div style={{display:'flex',flexDirection:'column',gap:9}}>
          {r.ingredients.map(i => <div key={i} style={{display:'flex',gap:10,fontSize:15}}><span style={{color:'var(--primary)'}}>·</span>{i}</div>)}
        </div>
      </Card>
      <div>
        <SectionTitle>Étapes</SectionTitle>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          {r.etapes.map((e,i) => <div key={i} style={{display:'flex',gap:12}}>
            <span style={{flexShrink:0,width:26,height:26,borderRadius:'50%',background:'var(--primary-light)',color:'var(--primary-on-pastel)',fontSize:13,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center'}}>{i+1}</span>
            <span style={{fontSize:15,lineHeight:1.5,textWrap:'pretty'}}>{e}</span>
          </div>)}
        </div>
      </div>
      <Card style={{background:'var(--secondary-light)',border:'none'}}>
        <Eyebrow>Note d'atelier</Eyebrow>
        <div style={{fontSize:15,lineHeight:1.5,marginTop:6,textWrap:'pretty'}}>{r.note}</div>
      </Card>
      <Button fullWidth icon={added ? 'check' : 'shopping-cart'} onClick={() => setAdded(true)}>{added ? 'Ajouté aux courses' : 'Ajouter aux courses'}</Button>
    </div>
  </div>;
}

function MenuScreen({ go }) {
  const [sem,setSem] = React.useState(D.semaine);
  const [pick,setPick] = React.useState(null);
  return <div>
    <ScreenTitle>Cette semaine</ScreenTitle>
    <div style={{fontSize:13,color:'var(--text2)',marginBottom:16}}>9 → 15 juin · 5 repas planifiés</div>
    <Card padding={0}>
      {sem.map((j,i) => <div key={j.jour} style={{display:'flex',alignItems:'center',gap:12,padding:'13px 16px',borderTop:i?'0.5px solid var(--border-subtle)':'none'}}>
        <span style={{width:74,flexShrink:0,fontSize:13,fontWeight:700,color:'var(--text2)'}}>{j.jour}</span>
        {j.plat
          ? <span onClick={() => go('detail')} style={{fontSize:15,cursor:'pointer'}}>{j.plat}</span>
          : <button onClick={() => setPick(i)} style={{background:'none',border:'none',padding:0,cursor:'pointer',fontFamily:'var(--font-text)',fontSize:15,fontWeight:600,color:'var(--primary-dark)',display:'flex',alignItems:'center',gap:6}}><Icon name="plus" size={17} /> Choisir un plat</button>}
        {j.plat ? <Icon name="dots" size={18} color="var(--text3)" style={{marginLeft:'auto'}} /> : null}
      </div>)}
    </Card>
    <div style={{marginTop:22}}>
      <SectionTitle action="Voir les courses" onAction={() => go('courses')}>Ce qu'il manque</SectionTitle>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {["600 g d'abricots","Riz arborio","Parmesan","3 citrons"].map(x => <Badge key={x} hue="peche" tone="light">{x}</Badge>)}
      </div>
    </div>
    {pick !== null ? <Sheet onClose={() => setPick(null)}>
      <BottomSheet title={'Plat du ' + D.semaine[pick].jour.toLowerCase()} onClose={() => setPick(null)}>
        <div style={{display:'flex',flexDirection:'column',gap:2,marginBottom:14}}>
          {D.livre.slice(0,4).map(r => <button key={r.id} onClick={() => { setSem(s => s.map((j,i) => i===pick ? {...j, plat:r.title} : j)); setPick(null); }}
            style={{display:'flex',alignItems:'center',gap:12,padding:'11px 4px',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-text)'}}>
            <span style={{width:40,height:40,borderRadius:'var(--radius-field)',background:'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',flexShrink:0}} />
            <span style={{fontSize:15}}>{r.title}</span>
            <span style={{marginLeft:'auto',fontSize:13,color:'var(--text3)'}}>{r.time}</span>
          </button>)}
        </div>
        <Button variant="secondary" fullWidth onClick={() => setPick(null)}>Chercher dans le Livre</Button>
      </BottomSheet>
    </Sheet> : null}
  </div>;
}

function CoursesScreen() {
  const [done,setDone] = React.useState({});
  const [grouped,setGrouped] = React.useState(true);
  const flat = D.courses.flatMap(r => r.items.map(i => ({ rayon:r.rayon, item:i })));
  const groups = grouped ? D.courses : [{ rayon:'Tout', items: flat.map(x => x.item) }];
  const total = flat.length, checked = Object.values(done).filter(Boolean).length;
  return <div>
    <ScreenTitle>Courses</ScreenTitle>
    <div style={{fontSize:13,color:'var(--text2)',marginBottom:14}}>{checked} sur {total} cochés · 5 repas</div>
    <Toggle checked={grouped} onChange={setGrouped} label="Grouper par rayon" style={{marginBottom:18}} />
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      {groups.map(g => <div key={g.rayon}>
        <SectionTitle>{g.rayon}</SectionTitle>
        <Card padding={0}>
          {g.items.map((it,i) => {
            const on = !!done[it];
            return <button key={it} onClick={() => setDone(d => ({...d, [it]: !d[it]}))}
              style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'13px 16px',background:'none',border:'none',borderTop:i?'0.5px solid var(--border-subtle)':'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-text)'}}>
              <span style={{width:22,height:22,borderRadius:'var(--radius-field)',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',background:on?'var(--primary)':'transparent',border:on?'none':'1px solid var(--border)',color:'#fff'}}>{on ? <Icon name="check" size={15} /> : null}</span>
              <span style={{fontSize:15,color:on?'var(--text3)':'var(--text)',textDecoration:on?'line-through':'none'}}>{it}</span>
            </button>;
          })}
        </Card>
      </div>)}
    </div>
    <div style={{marginTop:20}}><Button variant="text">Tout effacer</Button></div>
  </div>;
}

function SaisonScreen({ go }) {
  return <div>
    <TopBar onBack={() => go('accueil')} title="De saison" />
    <ScreenTitle>Juin</ScreenTitle>
    <div style={{fontSize:13,color:'var(--text2)',marginBottom:18,lineHeight:1.5}}>Ce qui arrive sur les étals ce mois-ci, et les recettes du Livre qui vont avec.</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12,marginBottom:24}}>
      {D.saison.map(s => <Card key={s.name} padding={14} style={{display:'flex',flexDirection:'column',gap:6}}>
        <span style={{width:34,height:34,borderRadius:'50%',background:'var(--' + s.hue + (s.hue==='primary'?'-pastel':'') + ')',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="leaf" size={18} color="var(--text)" /></span>
        <span style={{fontWeight:700,fontSize:15}}>{s.name}</span>
        <span style={{fontSize:13,color:'var(--text2)'}}>{s.month}</span>
      </Card>)}
    </div>
    <SectionTitle>Avec des abricots</SectionTitle>
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
      {D.livre.slice(0,2).map(r => <RecipeCard key={r.id} title={r.title} time={r.time} onClick={() => go('detail')} />)}
    </div>
  </div>;
}

Object.assign(window, { HomeScreen, RecipesScreen, DetailScreen, MenuScreen, CoursesScreen, SaisonScreen, Sheet, ScreenTitle, SectionTitle, Eyebrow, TopBar });
