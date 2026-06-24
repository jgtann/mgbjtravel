import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './InteractiveMap.css';

const provinces = [
  { id: 'bokeo', cy: 10, cx: 30, translationKey: 'mapBokeo' },
  { id: 'luang_prabang', cy: 25, cx: 45, translationKey: 'mapLuangPrabang' },
  { id: 'vang_vieng', cy: 40, cx: 35, translationKey: 'mapVangVieng' },
  { id: 'vientiane', cy: 55, cx: 40, translationKey: 'mapVientiane' },
  { id: 'khammouane', cy: 70, cx: 55, translationKey: 'mapKhammouane' },
  { id: 'champasak', cy: 90, cx: 60, translationKey: 'mapChampasak' }
];

const InteractiveMap = () => {
  const { t } = useLanguage();
  const [activeNode, setActiveNode] = useState(provinces[1]); // Default to Luang Prabang

  return (
    <section className="map-section">
      <div className="container map-container">
        
        <div className="map-visual">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mekong-river-svg">
            {/* Zen flowing river path */}
            <path 
              d="M 25 0 Q 35 15, 30 30 T 40 55 T 50 75 T 60 100" 
              fill="none" 
              stroke="var(--accent)" 
              strokeWidth="0.5" 
              strokeLinecap="round"
              className="river-path"
            />
            
            {/* Province Nodes */}
            {provinces.map((prov) => (
              <g 
                key={prov.id} 
                className={`map-node ${activeNode.id === prov.id ? 'active' : ''}`}
                onClick={() => setActiveNode(prov)}
                onMouseEnter={() => setActiveNode(prov)}
              >
                <circle cx={`${prov.cx}`} cy={`${prov.cy}`} r="1.5" className="node-outer" />
                <circle cx={`${prov.cx}`} cy={`${prov.cy}`} r="0.6" className="node-inner" />
                <text x={`${prov.cx + 3}`} y={`${prov.cy + 0.5}`} className="node-label">
                  {t(`${prov.translationKey}Name`)}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="map-info">
          <h2 className="map-title">{t('mapTitle')}</h2>
          <p className="map-subtitle">{t('mapSubtitle')}</p>
          
          <div className="active-province-card">
            <h3>{t(`${activeNode.translationKey}Name`)}</h3>
            <p>{t(`${activeNode.translationKey}Desc`)}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveMap;
