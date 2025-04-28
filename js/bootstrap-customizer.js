// // Salve como: ./js/bootstrap-customizer.js
// class BootstrapCustomizer {
//   // constructor(config) {
//   //   this.config = config;
//   //   this.styleElement = null;
//   //   this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
//   //   this.generators = {
//   //     // Geradores para cada tipo de propriedade CSS
//   //     grid: this.generateGrid.bind(this),
//   //     spacing: this.generateSpacing.bind(this),
//   //     colors: this.generateColors.bind(this),
//   //     opacity: this.generateOpacity.bind(this),
//   //     fontSize: this.generateFontSize.bind(this),
//   //     gradients: this.generateGradients.bind(this),
//   //     hoverEffects: this.generateHoverEffects.bind(this),
//   //     default: this.generateGeneric.bind(this) // Gerador padrão para propriedades não especificadas
//   //   };
//   // }


//   constructor(config) {
//     this.config = config;
//     this.styleElement = null;
//     this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
//     this.generators = {
//       // Geradores para cada tipo de propriedade CSS
//       grid: this.generateGrid.bind(this),
//       spacing: this.generateSpacing.bind(this),
//       colors: this.generateColors.bind(this),
//       opacity: this.generateOpacity.bind(this),
//       fontSize: this.generateFontSize.bind(this),
//       gradients: this.generateGradients.bind(this),
//       hoverEffects: this.generateHoverEffects.bind(this),
//       textTransform: this.generateTextTransform.bind(this), 
//       textDecoration: this.generateTextDecoration.bind(this), 
//       default: this.generateGeneric.bind(this)
//     };
//   }

//   apply() {
//     const css = this.generateCSS();
//     this.injectCSS(css);
//     return this;
//   }

//   update(newConfig) {
//     this.config = this.mergeConfigs(this.config, newConfig);
//     return this.apply();
//   }

//   mergeConfigs(original, updates) {
//     if (!updates) return original;
//     const result = { ...original };

//     for (const [key, value] of Object.entries(updates)) {
//       if (value === null) {
//         delete result[key];
//       } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
//         result[key] = this.mergeConfigs(result[key] || {}, value);
//       } else {
//         result[key] = value;
//       }
//     }

//     return result;
//   }

//   getBootstrapConfig() {
//     return this.config.bootstrap && this.config.bootstrap.config
//       ? this.config.bootstrap.config
//       : this.config;
//   }

//   generateCSS() {
//     const bootstrapConfig = this.getBootstrapConfig();
//     let css = '/* Bootstrap Custom CSS - Gerado por BootstrapCustomizer */\n\n';

//     // Processar cada seção da configuração
//     Object.entries(bootstrapConfig).forEach(([sectionKey, sectionValue]) => {
//       // Ignorar propriedades que não são objetos
//       if (typeof sectionValue !== 'object' || sectionValue === null) return;

//       // Usar o gerador específico se existir, caso contrário usar o gerador padrão
//       const generator = this.generators[sectionKey] || this.generators.default;
//       css += generator(sectionKey, sectionValue, bootstrapConfig);
//     });

//     // Processar variantes de opacidade para cores, se configurado
//     if (bootstrapConfig.colors && bootstrapConfig.opacity &&
//       bootstrapConfig.cssOptions?.generateOpacityVariants) {
//       css += this.generateColorOpacityVariants(bootstrapConfig);
//     }

//     return css;
//   }

//   generateGrid(sectionKey, sectionValue) {
//     let css = '';
//     if (sectionValue.columns) {
//       Object.entries(sectionValue.columns).forEach(([className, width]) => {
//         css += `.${className} { width: ${width} !important; }\n`;
//       });
//       css += '\n';
//     }
//     return css;
//   }

//   generateColors(sectionKey, sectionValue) {
//     let css = ':root {\n';

//     // Definir variáveis CSS para cores
//     Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
//       if (typeof colorValue === 'object') {
//         css += `  --bs-${colorName}: ${colorValue.hex || colorValue.value || '#000000'};\n`;
//         if (colorValue.rgb) {
//           css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
//         }
//       } else {
//         css += `  --bs-${colorName}: ${colorValue};\n`;
//       }
//     });
//     css += '}\n\n';

//     // Gerar classes para cada cor
//     Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
//       css += `.bg-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
//       css += `.text-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
//       css += `.border-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
//       css += `.btn-${colorName} { background-color: var(--bs-${colorName}) !important; border-color: var(--bs-${colorName}) !important; }\n`;
//     });
//     css += '\n';

//     return css;
//   }

//   generateSpacing(sectionKey, sectionValue) {
//     let css = '';
//     Object.entries(sectionValue).forEach(([spacingKey, spacingValue]) => {
//       // Margin
//       css += `.m-${spacingKey} { margin: ${spacingValue} !important; }\n`;
//       css += `.mt-${spacingKey} { margin-top: ${spacingValue} !important; }\n`;
//       css += `.mb-${spacingKey} { margin-bottom: ${spacingValue} !important; }\n`;
//       css += `.ms-${spacingKey} { margin-left: ${spacingValue} !important; }\n`;
//       css += `.me-${spacingKey} { margin-right: ${spacingValue} !important; }\n`;
//       css += `.mx-${spacingKey} { margin-left: ${spacingValue} !important; margin-right: ${spacingValue} !important; }\n`;
//       css += `.my-${spacingKey} { margin-top: ${spacingValue} !important; margin-bottom: ${spacingValue} !important; }\n`;

//       // Padding
//       css += `.p-${spacingKey} { padding: ${spacingValue} !important; }\n`;
//       css += `.pt-${spacingKey} { padding-top: ${spacingValue} !important; }\n`;
//       css += `.pb-${spacingKey} { padding-bottom: ${spacingValue} !important; }\n`;
//       css += `.ps-${spacingKey} { padding-left: ${spacingValue} !important; }\n`;
//       css += `.pe-${spacingKey} { padding-right: ${spacingValue} !important; }\n`;
//       css += `.px-${spacingKey} { padding-left: ${spacingValue} !important; padding-right: ${spacingValue} !important; }\n`;
//       css += `.py-${spacingKey} { padding-top: ${spacingValue} !important; padding-bottom: ${spacingValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   generateOpacity(sectionKey, sectionValue) {
//     let css = '/* Opacity classes */\n';
//     Object.entries(sectionValue).forEach(([opacityName, opacityValue]) => {
//       css += `.opacity-${opacityName} { opacity: ${opacityValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   generateFontSize(sectionKey, sectionValue) {
//     let css = '/* Font size classes */\n';
//     Object.entries(sectionValue).forEach(([sizeName, sizeValue]) => {
//       css += `.fs-${sizeName} { font-size: ${sizeValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   generateGradients(sectionKey, sectionValue) {
//     let css = '/* Gradient classes */\n';

//     Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
//       const direction = gradientConfig.direction || 'to right';
//       const colors = gradientConfig.colors || ['#000', '#fff'];
//       const colorString = colors.join(', ');

//       // Classe de fundo de gradiente
//       css += `.bg-gradient-${gradientName} { background: linear-gradient(${direction}, ${colorString}) !important; }\n`;

//       // Classes para texto com gradiente
//       css += `.text-gradient-${gradientName} { 
//         background: linear-gradient(${direction}, ${colorString});
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         background-clip: text;
//         text-fill-color: transparent; 
//       }\n`;

//       // Classe para borda com gradiente
//       css += `.border-gradient-${gradientName} { 
//         border: 3px solid transparent;
//         background: linear-gradient(${direction}, ${colorString}) border-box;
//         -webkit-mask: 
//            linear-gradient(#fff 0 0) padding-box, 
//            linear-gradient(#fff 0 0);
//         -webkit-mask-composite: destination-out;
//         mask-composite: exclude;
//       }\n`;
//     });

//     css += '\n';
//     return css;
//   }

//   generateHoverEffects(sectionKey, sectionValue, bootstrapConfig) {
//     let css = '/* Hover effect classes */\n';

//     Object.entries(sectionValue).forEach(([effectName, effectConfig]) => {
//       css += `.hover-${effectName} {\n`;

//       // Adiciona a transição padrão se não existir
//       if (!effectConfig.transition) {
//         css += `  transition: all 0.3s ease !important;\n`;
//       } else {
//         css += `  transition: ${effectConfig.transition} !important;\n`;
//       }

//       css += `}\n`;

//       css += `.hover-${effectName}:hover {\n`;
//       Object.entries(effectConfig).forEach(([prop, value]) => {
//         if (prop !== 'transition') { // A transição fica no elemento base, não no :hover
//           css += `  ${prop}: ${value} !important;\n`;
//         }
//       });
//       css += `}\n`;
//     });

//     // Gerar combinações de hover para fundos
//     if (bootstrapConfig.colors && bootstrapConfig.cssOptions?.generateHoverVariants) {
//       css += '\n/* Background hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-bg-${colorName}:hover { background-color: var(--bs-${colorName}) !important; }\n`;

//         // Variantes com opacidade se tiver opacidade configurada
//         if (bootstrapConfig.opacity) {
//           Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//             if (opacityName !== "100") {
//               const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
//               css += `.hover-bg-${colorName}-${opacityName}:hover { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             }
//           });
//         }
//       });

//       // Mesmo para texto
//       css += '\n/* Text hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-text-${colorName}:hover { color: var(--bs-${colorName}) !important; }\n`;

//         if (bootstrapConfig.opacity) {
//           Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//             if (opacityName !== "100") {
//               const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
//               css += `.hover-text-${colorName}-${opacityName}:hover { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             }
//           });
//         }
//       });

//       // Bordas hover
//       css += '\n/* Border hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-border-${colorName}:hover { border-color: var(--bs-${colorName}) !important; }\n`;
//       });
//     }

//     css += '\n';
//     return css;
//   }

//   generateGeneric(sectionKey, sectionValue) {
//     // Gerador genérico para qualquer outra propriedade
//     let css = `/* ${sectionKey} classes */\n`;
//     Object.entries(sectionValue).forEach(([key, value]) => {
//       if (typeof value === 'string' || typeof value === 'number') {
//         css += `.${sectionKey}-${key} { ${sectionKey}: ${value} !important; }\n`;
//       }
//     });
//     css += '\n';
//     return css;
//   }

//   generateColorOpacityVariants(bootstrapConfig) {
//     let css = '/* Color with opacity variants */\n';

//     Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//       let rgb = null;

//       if (typeof colorValue === 'object' && colorValue.rgb) {
//         rgb = colorValue.rgb;
//       }

//       if (rgb) {
//         Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//           if (opacityName !== '100') { // Pula opacidade 100% pois é igual à cor base
//             css += `.bg-${colorName}-${opacityName} { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             css += `.text-${colorName}-${opacityName} { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             css += `.border-${colorName}-${opacityName} { border-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//           }
//         });
//       }
//     });

//     return css;
//   }


//   generateTextTransform(sectionKey, sectionValue) {
//     let css = '/* Text Transform classes */\n';
//     Object.entries(sectionValue).forEach(([transformName, transformValue]) => {
//       css += `.text-${transformName} { text-transform: ${transformValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   generateTextDecoration(sectionKey, sectionValue) {
//     let css = '/* Text Decoration classes */\n';
//     Object.entries(sectionValue).forEach(([decorationName, decorationValue]) => {
//       console.log(decorationName)
//       css += `.text-${decorationName} { text-decoration: ${decorationValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   injectCSS(css) {
//     if (this.styleElement && this.styleElement.parentNode) {
//       this.styleElement.parentNode.removeChild(this.styleElement);
//     }

//     this.styleElement = document.createElement('style');
//     this.styleElement.id = this.styleId;
//     this.styleElement.textContent = css;
//     document.head.appendChild(this.styleElement);

//     // console.log(`Estilos Bootstrap personalizados aplicados com o ID: ${this.styleId}`);
//   }

//   // Método para adicionar novos geradores personalizados
//   addGenerator(type, generator) {
//     if (typeof generator === 'function') {
//       this.generators[type] = generator;
//     }
//     return this;
//   }
// }

// // Disponibiliza no navegador
// window.BootstrapCustomizer = BootstrapCustomizer;

// // ***************** version 1.2.0 *************
// // Salve como: ./js/bootstrap-customizer.js
// class BootstrapCustomizer {
//   // constructor(config) {
//   //   this.config = config;
//   //   this.styleElement = null;
//   //   this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
//   //   this.generators = {
//   //     // Geradores para cada tipo de propriedade CSS
//   //     grid: this.generateGrid.bind(this),
//   //     spacing: this.generateSpacing.bind(this),
//   //     colors: this.generateColors.bind(this),
//   //     opacity: this.generateOpacity.bind(this),
//   //     fontSize: this.generateFontSize.bind(this),
//   //     gradients: this.generateGradients.bind(this),
//   //     hoverEffects: this.generateHoverEffects.bind(this),
//   //     textTransform: this.generateTextTransform.bind(this), 
//   //     textDecoration: this.generateTextDecoration.bind(this), 
//   //     default: this.generateGeneric.bind(this)
//   //   };
//   // }

//   constructor(config) {
//     this.config = config;
//     this.styleElement = null;
//     this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
//     this.generators = {
//       // Geradores para cada tipo de propriedade CSS
//       grid: this.generateGrid.bind(this),
//       spacing: this.generateSpacing.bind(this),
//       colors: this.generateColors.bind(this),
//       opacity: this.generateOpacity.bind(this),
//       fontSize: this.generateFontSize.bind(this),
//       // fontWeight: this.generateFontWeight.bind(this),
//       // lineHeight: this.generateLineHeight.bind(this),
//       // letterSpacing: this.generateLetterSpacing.bind(this),
//       // borderRadius: this.generateBorderRadius.bind(this),
//       // borderWidth: this.generateBorderWidth.bind(this),
//       // boxShadow: this.generateBoxShadow.bind(this),
//       // width: this.generateWidth.bind(this),
//       // height: this.generateHeight.bind(this),
//       // display: this.generateDisplay.bind(this),
//       // position: this.generatePosition.bind(this),
//       // zIndex: this.generateZIndex.bind(this),
//       // textAlign: this.generateTextAlign.bind(this),
//       // verticalAlign: this.generateVerticalAlign.bind(this),
//       gradients: this.generateGradients.bind(this),
//       hoverEffects: this.generateHoverEffects.bind(this),
//       textTransform: this.generateTextTransform.bind(this),
//       textDecoration: this.generateTextDecoration.bind(this),
//       // animations: this.generateAnimations.bind(this),
//       // flex: this.generateFlex.bind(this),
//       // flexDirection: this.generateFlexDirection.bind(this),
//       // flexWrap: this.generateFlexWrap.bind(this),
//       // alignItems: this.generateAlignItems.bind(this),
//       // justifyContent: this.generateJustifyContent.bind(this),
//       // alignContent: this.generateAlignContent.bind(this),
//       default: this.generateGeneric.bind(this) 
//     };
//   }

//   apply() {
//     const css = this.generateCSS();
//     this.injectCSS(css);
//     return this;
//   }

//   update(newConfig) {
//     this.config = this.mergeConfigs(this.config, newConfig);
//     return this.apply();
//   }

//   mergeConfigs(original, updates) {
//     if (!updates) return original;
//     const result = { ...original };

//     for (const [key, value] of Object.entries(updates)) {
//       if (value === null) {
//         delete result[key];
//       } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
//         result[key] = this.mergeConfigs(result[key] || {}, value);
//       } else {
//         result[key] = value;
//       }
//     }

//     return result;
//   }

//   getBootstrapConfig() {
//     return this.config.bootstrap && this.config.bootstrap.config
//       ? this.config.bootstrap.config
//       : this.config;
//   }

//   generateCSS() {
//     const bootstrapConfig = this.getBootstrapConfig();
//     let css = '/* Bootstrap Custom CSS - Gerado por BootstrapCustomizer */\n\n';

//     // Processar cada seção da configuração
//     Object.entries(bootstrapConfig).forEach(([sectionKey, sectionValue]) => {
//       // Ignorar propriedades que não são objetos
//       if (typeof sectionValue !== 'object' || sectionValue === null) return;

//       // Usar o gerador específico se existir, caso contrário usar o gerador padrão
//       const generator = this.generators[sectionKey] || this.generators.default;
//       css += generator(sectionKey, sectionValue, bootstrapConfig);
//     });

//     // Processar variantes de opacidade para cores, se configurado
//     if (bootstrapConfig.colors && bootstrapConfig.opacity &&
//       bootstrapConfig.cssOptions?.generateOpacityVariants) {
//       css += this.generateColorOpacityVariants(bootstrapConfig);
//     }

//     return css;
//   }

//   // Função auxiliar para gerar classes responsivas
//   generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, cssGenerator) {
//     let css = '';

//     // Gerar classes padrão sem breakpoint
//     Object.entries(sectionValue).forEach(([key, value]) => {
//       css += cssGenerator(key, value, '');
//     });

//     // Gerar classes responsivas com breakpoints
//     if (bootstrapConfig.grid && bootstrapConfig.grid.breakpoints) {
//       const breakpoints = bootstrapConfig.grid.breakpoints;

//       Object.entries(breakpoints).forEach(([breakpointName, breakpointValue]) => {
//         // Pular xs pois já é o padrão
//         if (breakpointName === 'xs') return;

//         css += `\n@media (min-width: ${breakpointValue}) {\n`;

//         Object.entries(sectionValue).forEach(([key, value]) => {
//           css += cssGenerator(key, value, `${breakpointName}-`);
//         });

//         css += '}\n';
//       });
//     }

//     return css;
//   }

//   generateGrid(sectionKey, sectionValue) {
//     let css = '';
//     if (sectionValue.columns) {
//       Object.entries(sectionValue.columns).forEach(([className, width]) => {
//         css += `.${className} { width: ${width} !important; }\n`;
//       });
//       css += '\n';
//     }
//     return css;
//   }

//   generateColors(sectionKey, sectionValue, bootstrapConfig) {
//     let css = ':root {\n';

//     // Definir variáveis CSS para cores
//     Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
//       if (typeof colorValue === 'object') {
//         css += `  --bs-${colorName}: ${colorValue.hex || colorValue.value || '#000000'};\n`;
//         if (colorValue.rgb) {
//           css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
//         }
//       } else {
//         css += `  --bs-${colorName}: ${colorValue};\n`;
//       }
//     });
//     css += '}\n\n';

//     // Função para gerar CSS de cores com suporte a breakpoints
//     const generateColorCSS = (colorName, colorValue, breakpointPrefix) => {
//       let classCss = '';
//       classCss += `.bg-${breakpointPrefix}${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
//       classCss += `.text-${breakpointPrefix}${colorName} { color: var(--bs-${colorName}) !important; }\n`;
//       classCss += `.border-${breakpointPrefix}${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
//       classCss += `.btn-${breakpointPrefix}${colorName} { background-color: var(--bs-${colorName}) !important; border-color: var(--bs-${colorName}) !important; }\n`;
//       return classCss;
//     };

//     css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateColorCSS);

//     return css;
//   }

//   generateSpacing(sectionKey, sectionValue, bootstrapConfig) {
//     // Função para gerar CSS de espaçamento com suporte a breakpoints
//     const generateSpacingCSS = (spacingKey, spacingValue, breakpointPrefix) => {
//       let spacingCss = '';

//       // Margin
//       spacingCss += `.m-${breakpointPrefix}${spacingKey} { margin: ${spacingValue} !important; }\n`;
//       spacingCss += `.mt-${breakpointPrefix}${spacingKey} { margin-top: ${spacingValue} !important; }\n`;
//       spacingCss += `.mb-${breakpointPrefix}${spacingKey} { margin-bottom: ${spacingValue} !important; }\n`;
//       spacingCss += `.ms-${breakpointPrefix}${spacingKey} { margin-left: ${spacingValue} !important; }\n`;
//       spacingCss += `.me-${breakpointPrefix}${spacingKey} { margin-right: ${spacingValue} !important; }\n`;
//       spacingCss += `.mx-${breakpointPrefix}${spacingKey} { margin-left: ${spacingValue} !important; margin-right: ${spacingValue} !important; }\n`;
//       spacingCss += `.my-${breakpointPrefix}${spacingKey} { margin-top: ${spacingValue} !important; margin-bottom: ${spacingValue} !important; }\n`;

//       // Padding
//       spacingCss += `.p-${breakpointPrefix}${spacingKey} { padding: ${spacingValue} !important; }\n`;
//       spacingCss += `.pt-${breakpointPrefix}${spacingKey} { padding-top: ${spacingValue} !important; }\n`;
//       spacingCss += `.pb-${breakpointPrefix}${spacingKey} { padding-bottom: ${spacingValue} !important; }\n`;
//       spacingCss += `.ps-${breakpointPrefix}${spacingKey} { padding-left: ${spacingValue} !important; }\n`;
//       spacingCss += `.pe-${breakpointPrefix}${spacingKey} { padding-right: ${spacingValue} !important; }\n`;
//       spacingCss += `.px-${breakpointPrefix}${spacingKey} { padding-left: ${spacingValue} !important; padding-right: ${spacingValue} !important; }\n`;
//       spacingCss += `.py-${breakpointPrefix}${spacingKey} { padding-top: ${spacingValue} !important; padding-bottom: ${spacingValue} !important; }\n`;

//       return spacingCss;
//     };

//     return this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateSpacingCSS);
//   }

//   generateOpacity(sectionKey, sectionValue, bootstrapConfig) {
//     // Função para gerar CSS de opacidade com suporte a breakpoints
//     const generateOpacityCSS = (opacityKey, opacityValue, breakpointPrefix) => {
//       return `.opacity-${breakpointPrefix}${opacityKey} { opacity: ${opacityValue} !important; }\n`;
//     };

//     let css = '/* Opacity classes */\n';
//     css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateOpacityCSS);
//     css += '\n';

//     return css;
//   }

//   generateFontSize(sectionKey, sectionValue, bootstrapConfig) {
//     // Função para gerar CSS de tamanhos de fonte com suporte a breakpoints
//     const generateFontSizeCSS = (sizeKey, sizeValue, breakpointPrefix) => {
//       return `.fs-${breakpointPrefix}${sizeKey} { font-size: ${sizeValue} !important; }\n`;
//     };

//     let css = '/* Font size classes */\n';
//     css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateFontSizeCSS);
//     css += '\n';

//     return css;
//   }

//   generateGradients(sectionKey, sectionValue) {
//     let css = '/* Gradient classes */\n';

//     Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
//       const direction = gradientConfig.direction || 'to right';
//       const colors = gradientConfig.colors || ['#000', '#fff'];
//       const colorString = colors.join(', ');

//       // Classe de fundo de gradiente
//       css += `.bg-gradient-${gradientName} { background: linear-gradient(${direction}, ${colorString}) !important; }\n`;

//       // Classes para texto com gradiente
//       css += `.text-gradient-${gradientName} { 
//         background: linear-gradient(${direction}, ${colorString});
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         background-clip: text;
//         text-fill-color: transparent; 
//       }\n`;

//       // Classe para borda com gradiente
//       css += `.border-gradient-${gradientName} { 
//         border: 3px solid transparent;
//         background: linear-gradient(${direction}, ${colorString}) border-box;
//         -webkit-mask: 
//            linear-gradient(#fff 0 0) padding-box, 
//            linear-gradient(#fff 0 0);
//         -webkit-mask-composite: destination-out;
//         mask-composite: exclude;
//       }\n`;
//     });

//     css += '\n';
//     return css;
//   }

//   generateHoverEffects(sectionKey, sectionValue, bootstrapConfig) {
//     let css = '/* Hover effect classes */\n';

//     Object.entries(sectionValue).forEach(([effectName, effectConfig]) => {
//       css += `.hover-${effectName} {\n`;

//       // Adiciona a transição padrão se não existir
//       if (!effectConfig.transition) {
//         css += `  transition: all 0.3s ease !important;\n`;
//       } else {
//         css += `  transition: ${effectConfig.transition} !important;\n`;
//       }

//       css += `}\n`;

//       css += `.hover-${effectName}:hover {\n`;
//       Object.entries(effectConfig).forEach(([prop, value]) => {
//         if (prop !== 'transition') { // A transição fica no elemento base, não no :hover
//           css += `  ${prop}: ${value} !important;\n`;
//         }
//       });
//       css += `}\n`;
//     });

//     // Gerar combinações de hover para fundos
//     if (bootstrapConfig.colors && bootstrapConfig.cssOptions?.generateHoverVariants) {
//       css += '\n/* Background hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-bg-${colorName}:hover { background-color: var(--bs-${colorName}) !important; }\n`;

//         // Variantes com opacidade se tiver opacidade configurada
//         if (bootstrapConfig.opacity) {
//           Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//             if (opacityName !== "100") {
//               const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
//               css += `.hover-bg-${colorName}-${opacityName}:hover { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             }
//           });
//         }
//       });

//       // Mesmo para texto
//       css += '\n/* Text hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-text-${colorName}:hover { color: var(--bs-${colorName}) !important; }\n`;

//         if (bootstrapConfig.opacity) {
//           Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//             if (opacityName !== "100") {
//               const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
//               css += `.hover-text-${colorName}-${opacityName}:hover { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             }
//           });
//         }
//       });

//       // Bordas hover
//       css += '\n/* Border hover variants */\n';
//       Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//         css += `.hover-border-${colorName}:hover { border-color: var(--bs-${colorName}) !important; }\n`;
//       });
//     }

//     css += '\n';
//     return css;
//   }

//   generateGeneric(sectionKey, sectionValue) {
//     // Gerador genérico para qualquer outra propriedade
//     let css = `/* ${sectionKey} classes */\n`;
//     Object.entries(sectionValue).forEach(([key, value]) => {
//       if (typeof value === 'string' || typeof value === 'number') {
//         css += `.${sectionKey}-${key} { ${sectionKey}: ${value} !important; }\n`;
//       }
//     });
//     css += '\n';
//     return css;
//   }

//   generateColorOpacityVariants(bootstrapConfig) {
//     let css = '/* Color with opacity variants */\n';

//     Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
//       let rgb = null;

//       if (typeof colorValue === 'object' && colorValue.rgb) {
//         rgb = colorValue.rgb;
//       }

//       if (rgb) {
//         Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
//           if (opacityName !== '100') { // Pula opacidade 100% pois é igual à cor base
//             css += `.bg-${colorName}-${opacityName} { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             css += `.text-${colorName}-${opacityName} { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//             css += `.border-${colorName}-${opacityName} { border-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
//           }
//         });
//       }
//     });

//     return css;
//   }

//   generateTextTransform(sectionKey, sectionValue) {
//     let css = '/* Text Transform classes */\n';
//     Object.entries(sectionValue).forEach(([transformName, transformValue]) => {
//       css += `.text-${transformName} { text-transform: ${transformValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   generateTextDecoration(sectionKey, sectionValue) {
//     let css = '/* Text Decoration classes */\n';
//     Object.entries(sectionValue).forEach(([decorationName, decorationValue]) => {
//       css += `.text-${decorationName} { text-decoration: ${decorationValue} !important; }\n`;
//     });
//     css += '\n';
//     return css;
//   }

//   injectCSS(css) {
//     if (this.styleElement && this.styleElement.parentNode) {
//       this.styleElement.parentNode.removeChild(this.styleElement);
//     }

//     this.styleElement = document.createElement('style');
//     this.styleElement.id = this.styleId;
//     this.styleElement.textContent = css;
//     document.head.appendChild(this.styleElement);

//     // console.log(`Estilos Bootstrap personalizados aplicados com o ID: ${this.styleId}`);
//   }

//   // Método para adicionar novos geradores personalizados
//   addGenerator(type, generator) {
//     if (typeof generator === 'function') {
//       this.generators[type] = generator;
//     }
//     return this;
//   }
// }

// // Disponibiliza no navegador
// window.BootstrapCustomizer = BootstrapCustomizer;

// ***************** version 1.2.0 *************
// Salve como: ./js/bootstrap-customizer.js
class BootstrapCustomizer {
  // constructor(config) {
  //   this.config = config;
  //   this.styleElement = null;
  //   this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
  //   this.generators = {
  //     // Geradores para cada tipo de propriedade CSS
  //     grid: this.generateGrid.bind(this),
  //     spacing: this.generateSpacing.bind(this),
  //     colors: this.generateColors.bind(this),
  //     opacity: this.generateOpacity.bind(this),
  //     fontSize: this.generateFontSize.bind(this),
  //     gradients: this.generateGradients.bind(this),
  //     hoverEffects: this.generateHoverEffects.bind(this),
  //     textTransform: this.generateTextTransform.bind(this), 
  //     textDecoration: this.generateTextDecoration.bind(this), 
  //     default: this.generateGeneric.bind(this)
  //   };
  // }

  constructor(config) {
    this.config = config;
    this.styleElement = null;
    this.styleId = 'bootstrap-custom-' + Math.random().toString(36).substring(2, 10);
    this.generators = {
      // Geradores para cada tipo de propriedade CSS
      grid: this.generateGrid.bind(this),
      spacing: this.generateSpacing.bind(this),
      colors: this.generateColors.bind(this),
      opacity: this.generateOpacity.bind(this),
      fontSize: this.generateFontSize.bind(this),
      // fontWeight: this.generateFontWeight.bind(this),
      // lineHeight: this.generateLineHeight.bind(this),
      // letterSpacing: this.generateLetterSpacing.bind(this),
      // borderRadius: this.generateBorderRadius.bind(this),
      // borderWidth: this.generateBorderWidth.bind(this),
      // boxShadow: this.generateBoxShadow.bind(this),
      width: this.generateWidth.bind(this),
      height: this.generateHeight.bind(this),
      // display: this.generateDisplay.bind(this),
      // position: this.generatePosition.bind(this),
      // zIndex: this.generateZIndex.bind(this),
      // textAlign: this.generateTextAlign.bind(this),
      // verticalAlign: this.generateVerticalAlign.bind(this),
      gradients: this.generateGradients.bind(this),
      hoverEffects: this.generateHoverEffects.bind(this),
      textTransform: this.generateTextTransform.bind(this),
      textDecoration: this.generateTextDecoration.bind(this),
      // animations: this.generateAnimations.bind(this),
      // flex: this.generateFlex.bind(this),
      flexDirection: this.generateFlexDirection.bind(this),
      // flexWrap: this.generateFlexWrap.bind(this),
      // alignItems: this.generateAlignItems.bind(this),
      // justifyContent: this.generateJustifyContent.bind(this),
      // alignContent: this.generateAlignContent.bind(this),
      default: this.generateGeneric.bind(this)
    };
  }

  apply() {
    const css = this.generateCSS();
    this.injectCSS(css);
    return this;
  }

  update(newConfig) {
    this.config = this.mergeConfigs(this.config, newConfig);
    return this.apply();
  }

  mergeConfigs(original, updates) {
    if (!updates) return original;
    const result = { ...original };

    for (const [key, value] of Object.entries(updates)) {
      if (value === null) {
        delete result[key];
      } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        result[key] = this.mergeConfigs(result[key] || {}, value);
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  getBootstrapConfig() {
    return this.config.bootstrap && this.config.bootstrap.config
      ? this.config.bootstrap.config
      : this.config;
  }

  generateCSS() {
    const bootstrapConfig = this.getBootstrapConfig();
    let css = '/* Bootstrap Custom CSS - Gerado por BootstrapCustomizer */\n\n';

    // Processar cada seção da configuração
    Object.entries(bootstrapConfig).forEach(([sectionKey, sectionValue]) => {
      // Ignorar propriedades que não são objetos
      if (typeof sectionValue !== 'object' || sectionValue === null) return;

      // Usar o gerador específico se existir, caso contrário usar o gerador padrão
      const generator = this.generators[sectionKey] || this.generators.default;
      css += generator(sectionKey, sectionValue, bootstrapConfig);
    });

    // Processar variantes de opacidade para cores, se configurado
    if (bootstrapConfig.colors && bootstrapConfig.opacity &&
      bootstrapConfig.cssOptions?.generateOpacityVariants) {
      css += this.generateColorOpacityVariants(bootstrapConfig);
    }

    return css;
  }

  // Função auxiliar para gerar classes responsivas
  generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, cssGenerator) {
    let css = '';

    // Gerar classes padrão sem breakpoint
    Object.entries(sectionValue).forEach(([key, value]) => {
      css += cssGenerator(key, value, '');
    });

    // Verificar se temos breakpoints configurados
    if (bootstrapConfig.grid && bootstrapConfig.grid.breakpoints) {
      const breakpoints = bootstrapConfig.grid.breakpoints;

      // Para cada breakpoint, gerar uma media query com a condição específica
      Object.entries(breakpoints).forEach(([breakpointName, condition]) => {
        // Pular xs se for usado apenas como fallback
        if (breakpointName === 'xs' && condition === '0px') return;

        // Verificar se a condição já tem parênteses ou se precisa deles
        const mediaCondition = condition.includes(':') ? condition : `min-width: ${condition}`;

        // Criar media query com a condição personalizada
        css += `\n@media (${mediaCondition}) {\n`;

        // Gerar classes para este breakpoint
        Object.entries(sectionValue).forEach(([key, value]) => {
          css += cssGenerator(key, value, `${breakpointName}-`);
        });

        css += '}\n';
      });
    }

    return css;
  }

  generateGrid(sectionKey, sectionValue) {
    let css = '';
    if (sectionValue.columns) {
      Object.entries(sectionValue.columns).forEach(([className, width]) => {
        css += `.${className} { width: ${width} !important; }\n`;
      });
      css += '\n';
    }
    return css;
  }

  // generateColors(sectionKey, sectionValue, bootstrapConfig) {
  //   const viewportWidth = window.innerWidth;
  
  //   // Função de parsing melhorada para breakpoints
  //   const parseMediaCondition = (condition, viewportWidth) => {
  //     // Remove parênteses e normaliza
  //     const normalized = condition.replace(/[\(\)]/g, '').replace(/\s+/g, ' ');
      
  //     // Caso seja apenas max-width
  //     if (normalized.startsWith('max-width')) {
  //       const match = normalized.match(/max-width:\s*(\d+)(?:px)?/);
  //       return match 
  //         ? { 
  //             type: 'max', 
  //             value: parseInt(match[1]),
  //             pass: viewportWidth <= parseInt(match[1]) 
  //           } 
  //         : null;
  //     }
      
  //     // Caso seja min-width e max-width
  //     const minMatch = normalized.match(/min-width:\s*(\d+)(?:px)?/);
  //     const maxMatch = normalized.match(/max-width:\s*(\d+)(?:px)?/);
      
  //     if (minMatch && maxMatch) {
  //       const min = parseInt(minMatch[1]);
  //       const max = parseInt(maxMatch[1]);
  //       return { 
  //         type: 'between', 
  //         min, 
  //         max,
  //         pass: viewportWidth >= min && viewportWidth <= max
  //       };
  //     }
      
  //     // Caso seja apenas min-width
  //     if (minMatch) {
  //       const min = parseInt(minMatch[1]);
  //       return { 
  //         type: 'min', 
  //         value: min,
  //         pass: viewportWidth >= min 
  //       };
  //     }
      
  //     return null;
  //   };
  
  //   console.log('Viewport Width:', viewportWidth);
  //   console.log('Breakpoints:', bootstrapConfig.grid.breakpoints);
  
  //   // Geração de CSS com lógica de breakpoints
  //   let css = ':root {\n';
  
  //   // Definir variáveis de cores
  //   Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
  //     if (typeof colorValue === 'object') {
  //       css += `  --bs-${colorName}: ${colorValue.hex || colorValue.value || '#000000'};\n`;
  //       if (colorValue.rgb) {
  //         css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
  //       }
  //     } else {
  //       css += `  --bs-${colorName}: ${colorValue};\n`;
  //     }
  //   });
  //   css += '}\n\n';
  
  //   // Classes base
  //   Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
  //     css += `.bg-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
  //     css += `.text-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
  //     css += `.border-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
  //     css += `.btn-${colorName} { background-color: var(--bs-${colorName}) !important; border-color: var(--bs-${colorName}) !important; }\n`;
  //   });
  
  //   // Geração de classes responsivas
  //   Object.entries(bootstrapConfig.grid.breakpoints).forEach(([breakpointName, condition]) => {
  //     const parsedCondition = parseMediaCondition(condition, viewportWidth);
      
  //     console.log(`Breakpoint ${breakpointName}:`, parsedCondition);
  
  //     if (parsedCondition && parsedCondition.pass) {
  //       const mediaQuery = condition.includes('(') ? condition : `(${condition})`;
        
  //       css += `\n@media ${mediaQuery} {\n`;
  
  //       Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
  //         css += `  .text-${breakpointName}-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
  //         css += `  .bg-${breakpointName}-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
  //         css += `  .border-${breakpointName}-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
  //       });
  
  //       css += '}\n';
  //     }
  //   });
  
  //   return css;
  // }


  generateColors(sectionKey, sectionValue, bootstrapConfig) {
    // Geração de CSS sem depender do viewport atual
    let css = ':root {\n';
  
    // Definir variáveis CSS para cores
    Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        css += `  --bs-${colorName}: ${colorValue.hex || colorValue.value || '#000000'};\n`;
        if (colorValue.rgb) {
          css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
        }
      } else {
        css += `  --bs-${colorName}: ${colorValue};\n`;
      }
    });
    css += '}\n\n';
  
    // Gerar classes base (sem breakpoint)
    Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
      css += `.bg-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
      css += `.text-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
      css += `.border-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
      css += `.btn-${colorName} { background-color: var(--bs-${colorName}) !important; border-color: var(--bs-${colorName}) !important; }\n`;
    });
    css += '\n';
  
    // Primeiro, gerar todas as media queries exceto xs
    const breakpoints = Object.entries(bootstrapConfig.grid.breakpoints)
      .filter(([name]) => name !== 'xs');
    
    breakpoints.forEach(([breakpointName, condition]) => {
      const mediaQuery = condition.includes('(') ? condition : `(${condition})`;
      
      css += `@media ${mediaQuery} {\n`;
      
      Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
        css += `  .text-${breakpointName}-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
        css += `  .bg-${breakpointName}-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
        css += `  .border-${breakpointName}-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
      });
      
      css += '}\n\n';
    });
    
    // Por último, gerar a media query para xs (para ter prioridade no CSS)
    if (bootstrapConfig.grid.breakpoints.xs) {
      const condition = bootstrapConfig.grid.breakpoints.xs;
      const mediaQuery = condition.includes('(') ? condition : `(${condition})`;
      
      css += `@media ${mediaQuery} {\n`;
      
      Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
        css += `  .text-xs-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
        css += `  .bg-xs-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
        css += `  .border-xs-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
      });
      
      css += '}\n';
    }
    
    return css;
  }

  generateFlexDirection(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de direção flex com suporte a breakpoints
    const generateFlexDirectionCSS = (directionKey, directionValue, breakpointPrefix) => {
      return `.flex-${breakpointPrefix}${directionKey} { 
        flex-direction: ${directionValue} !important; 
      }\n`;
    };

    let css = '/* Flex Direction classes */\n';
    css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateFlexDirectionCSS);
    css += '\n';

    return css;
  }

  generateSpacing(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de espaçamento com suporte a breakpoints
    const generateSpacingCSS = (spacingKey, spacingValue, breakpointPrefix) => {
      let spacingCss = '';

      // Margin
      spacingCss += `.m-${breakpointPrefix}${spacingKey} { margin: ${spacingValue} !important; }\n`;
      spacingCss += `.mt-${breakpointPrefix}${spacingKey} { margin-top: ${spacingValue} !important; }\n`;
      spacingCss += `.mb-${breakpointPrefix}${spacingKey} { margin-bottom: ${spacingValue} !important; }\n`;
      spacingCss += `.ms-${breakpointPrefix}${spacingKey} { margin-left: ${spacingValue} !important; }\n`;
      spacingCss += `.me-${breakpointPrefix}${spacingKey} { margin-right: ${spacingValue} !important; }\n`;
      spacingCss += `.mx-${breakpointPrefix}${spacingKey} { margin-left: ${spacingValue} !important; margin-right: ${spacingValue} !important; }\n`;
      spacingCss += `.my-${breakpointPrefix}${spacingKey} { margin-top: ${spacingValue} !important; margin-bottom: ${spacingValue} !important; }\n`;

      // Padding
      spacingCss += `.p-${breakpointPrefix}${spacingKey} { padding: ${spacingValue} !important; }\n`;
      spacingCss += `.pt-${breakpointPrefix}${spacingKey} { padding-top: ${spacingValue} !important; }\n`;
      spacingCss += `.pb-${breakpointPrefix}${spacingKey} { padding-bottom: ${spacingValue} !important; }\n`;
      spacingCss += `.ps-${breakpointPrefix}${spacingKey} { padding-left: ${spacingValue} !important; }\n`;
      spacingCss += `.pe-${breakpointPrefix}${spacingKey} { padding-right: ${spacingValue} !important; }\n`;
      spacingCss += `.px-${breakpointPrefix}${spacingKey} { padding-left: ${spacingValue} !important; padding-right: ${spacingValue} !important; }\n`;
      spacingCss += `.py-${breakpointPrefix}${spacingKey} { padding-top: ${spacingValue} !important; padding-bottom: ${spacingValue} !important; }\n`;

      return spacingCss;
    };

    return this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateSpacingCSS);
  }

  generateOpacity(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de opacidade com suporte a breakpoints
    const generateOpacityCSS = (opacityKey, opacityValue, breakpointPrefix) => {
      return `.opacity-${breakpointPrefix}${opacityKey} { opacity: ${opacityValue} !important; }\n`;
    };

    let css = '/* Opacity classes */\n';
    css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateOpacityCSS);
    css += '\n';

    return css;
  }

  generateFontSize(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de tamanhos de fonte com suporte a breakpoints
    const generateFontSizeCSS = (sizeKey, sizeValue, breakpointPrefix) => {
      return `.fs-${breakpointPrefix}${sizeKey} { font-size: ${sizeValue} !important; }\n`;
    };

    let css = '/* Font size classes */\n';
    css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateFontSizeCSS);
    css += '\n';

    return css;
  }

  generateGradients(sectionKey, sectionValue, bootstrapConfig) {
    // Geração de CSS sem depender do viewport atual
    let css = ':root {\n';
  
    // Definir variáveis para gradientes
    Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
      const direction = gradientConfig.direction || 'to right';
      const colors = gradientConfig.colors || ['#000', '#fff'];
      const colorString = colors.join(', ');
  
      css += `  --bs-gradient-${gradientName}-direction: ${direction};\n`;
      css += `  --bs-gradient-${gradientName}-colors: ${colorString};\n`;
    });
    css += '}\n\n';
  
    // Gerar classes base (sem breakpoint)
    Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
      const direction = gradientConfig.direction || 'to right';
      const colors = gradientConfig.colors || ['#000', '#fff'];
      const colorString = colors.join(', ');
  
      // Classe de fundo de gradiente
      css += `.bg-gradient-${gradientName} { 
        background: linear-gradient(${direction}, ${colorString}) !important; 
      }\n`;
  
      // Classes para texto com gradiente
      css += `.text-gradient-${gradientName} { 
        background: linear-gradient(${direction}, ${colorString});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent; 
      }\n`;
  
      // Classe para borda com gradiente
      css += `.border-gradient-${gradientName} { 
        border: 3px solid transparent;
        background: linear-gradient(${direction}, ${colorString}) border-box;
        -webkit-mask: 
           linear-gradient(#fff 0 0) padding-box, 
           linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
      }\n`;
    });
    css += '\n';
  
    // Primeiro, gerar todas as media queries exceto xs
    const breakpoints = Object.entries(bootstrapConfig.grid.breakpoints)
      .filter(([name]) => name !== 'xs');
    
    breakpoints.forEach(([breakpointName, condition]) => {
      const mediaQuery = condition.includes('(') ? condition : `(${condition})`;
      
      css += `@media ${mediaQuery} {\n`;
      
      Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
        const direction = gradientConfig.direction || 'to right';
        const colors = gradientConfig.colors || ['#000', '#fff'];
        const colorString = colors.join(', ');
  
        css += `  .bg-gradient-${breakpointName}-${gradientName} { 
          background: linear-gradient(${direction}, ${colorString}) !important; 
        }\n`;
  
        css += `  .text-gradient-${breakpointName}-${gradientName} { 
          background: linear-gradient(${direction}, ${colorString});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent; 
        }\n`;
  
        css += `  .border-gradient-${breakpointName}-${gradientName} { 
          border: 3px solid transparent;
          background: linear-gradient(${direction}, ${colorString}) border-box;
          -webkit-mask: 
             linear-gradient(#fff 0 0) padding-box, 
             linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }\n`;
      });
      
      css += '}\n\n';
    });
    
    // Por último, gerar a media query para xs (para ter prioridade no CSS)
    if (bootstrapConfig.grid.breakpoints.xs) {
      const condition = bootstrapConfig.grid.breakpoints.xs;
      const mediaQuery = condition.includes('(') ? condition : `(${condition})`;
      
      css += `@media ${mediaQuery} {\n`;
      
      Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
        const direction = gradientConfig.direction || 'to right';
        const colors = gradientConfig.colors || ['#000', '#fff'];
        const colorString = colors.join(', ');
  
        css += `  .bg-gradient-xs-${gradientName} { 
          background: linear-gradient(${direction}, ${colorString}) !important; 
        }\n`;
  
        css += `  .text-gradient-xs-${gradientName} { 
          background: linear-gradient(${direction}, ${colorString});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent; 
        }\n`;
  
        css += `  .border-gradient-xs-${gradientName} { 
          border: 3px solid transparent;
          background: linear-gradient(${direction}, ${colorString}) border-box;
          -webkit-mask: 
             linear-gradient(#fff 0 0) padding-box, 
             linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }\n`;
      });
      
      css += '}\n';
    }
    
    return css;
  }

  generateHoverEffects(sectionKey, sectionValue, bootstrapConfig) {
    let css = '/* Hover effect classes */\n';

    Object.entries(sectionValue).forEach(([effectName, effectConfig]) => {
      css += `.hover-${effectName} {\n`;

      // Adiciona a transição padrão se não existir
      if (!effectConfig.transition) {
        css += `  transition: all 0.3s ease !important;\n`;
      } else {
        css += `  transition: ${effectConfig.transition} !important;\n`;
      }

      css += `}\n`;

      css += `.hover-${effectName}:hover {\n`;
      Object.entries(effectConfig).forEach(([prop, value]) => {
        if (prop !== 'transition') { // A transição fica no elemento base, não no :hover
          css += `  ${prop}: ${value} !important;\n`;
        }
      });
      css += `}\n`;
    });

    // Gerar combinações de hover para fundos
    if (bootstrapConfig.colors && bootstrapConfig.cssOptions?.generateHoverVariants) {
      css += '\n/* Background hover variants */\n';
      Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
        css += `.hover-bg-${colorName}:hover { background-color: var(--bs-${colorName}) !important; }\n`;

        // Variantes com opacidade se tiver opacidade configurada
        if (bootstrapConfig.opacity) {
          Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
            if (opacityName !== "100") {
              const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
              css += `.hover-bg-${colorName}-${opacityName}:hover { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
            }
          });
        }
      });

      // Mesmo para texto
      css += '\n/* Text hover variants */\n';
      Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
        css += `.hover-text-${colorName}:hover { color: var(--bs-${colorName}) !important; }\n`;

        if (bootstrapConfig.opacity) {
          Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
            if (opacityName !== "100") {
              const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
              css += `.hover-text-${colorName}-${opacityName}:hover { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
            }
          });
        }
      });

      // Bordas hover
      css += '\n/* Border hover variants */\n';
      Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
        css += `.hover-border-${colorName}:hover { border-color: var(--bs-${colorName}) !important; }\n`;
      });
    }

    css += '\n';
    return css;
  }

  generateGeneric(sectionKey, sectionValue) {
    // Gerador genérico para qualquer outra propriedade
    let css = `/* ${sectionKey} classes */\n`;
    Object.entries(sectionValue).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
        css += `.${sectionKey}-${key} { ${sectionKey}: ${value} !important; }\n`;
      }
    });
    css += '\n';
    return css;
  }

  generateColorOpacityVariants(bootstrapConfig) {
    let css = '/* Color with opacity variants */\n';

    Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
      let rgb = null;

      if (typeof colorValue === 'object' && colorValue.rgb) {
        rgb = colorValue.rgb;
      }

      if (rgb) {
        Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
          if (opacityName !== '100') { // Pula opacidade 100% pois é igual à cor base
            css += `.bg-${colorName}-${opacityName} { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
            css += `.text-${colorName}-${opacityName} { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
            css += `.border-${colorName}-${opacityName} { border-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
          }
        });
      }
    });

    return css;
  }

  generateTextTransform(sectionKey, sectionValue) {
    let css = '/* Text Transform classes */\n';
    Object.entries(sectionValue).forEach(([transformName, transformValue]) => {
      css += `.text-${transformName} { text-transform: ${transformValue} !important; }\n`;
    });
    css += '\n';
    return css;
  }

  generateTextDecoration(sectionKey, sectionValue) {
    let css = '/* Text Decoration classes */\n';
    Object.entries(sectionValue).forEach(([decorationName, decorationValue]) => {
      css += `.text-${decorationName} { text-decoration: ${decorationValue} !important; }\n`;
    });
    css += '\n';
    return css;
  }


  generateWidth(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de largura com suporte a breakpoints
    const generateWidthCSS = (sizeKey, sizeValue, breakpointPrefix) => {
      // Usa operador ternário para lidar com diferentes tipos de valores
      return `.w-${breakpointPrefix}${sizeKey} { 
        width: ${
        // Verifica se o valor é uma string ou número válido
        (typeof sizeValue === 'string' || typeof sizeValue === 'number')
          ? `${sizeValue} !important`
          // Se não for válido, usa 'auto' como padrão
          : 'auto !important'
        }; 
      }\n`;
    };

    let css = '/* Width classes */\n';
    css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateWidthCSS);
    css += '\n';

    return css;
  }

  generateHeight(sectionKey, sectionValue, bootstrapConfig) {
    // Função para gerar CSS de altura com suporte a breakpoints
    const generateHeightCSS = (sizeKey, sizeValue, breakpointPrefix) => {
      // Usa operador ternário para lidar com diferentes tipos de valores
      return `.h-${breakpointPrefix}${sizeKey} { 
        height: ${
        // Verifica se o valor é uma string ou número válido
        (typeof sizeValue === 'string' || typeof sizeValue === 'number')
          ? `${sizeValue} !important`
          // Se não for válido, usa 'auto' como padrão
          : 'auto !important'
        }; 
      }\n`;
    };

    let css = '/* Height classes */\n';
    css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateHeightCSS);
    css += '\n';

    return css;
  }

  injectCSS(css) {
    if (this.styleElement && this.styleElement.parentNode) {
      this.styleElement.parentNode.removeChild(this.styleElement);
    }

    this.styleElement = document.createElement('style');
    this.styleElement.id = this.styleId;
    this.styleElement.textContent = css;
    document.head.appendChild(this.styleElement);

    // console.log(`Estilos Bootstrap personalizados aplicados com o ID: ${this.styleId}`);
  }

  // Método para adicionar novos geradores personalizados
  addGenerator(type, generator) {
    if (typeof generator === 'function') {
      this.generators[type] = generator;
    }
    return this;
  }
}

// Disponibiliza no navegador
window.BootstrapCustomizer = BootstrapCustomizer;



