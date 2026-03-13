# 🦷 **Proba Práctica: Clínica Dental Sonrisa**

### **📚 Contexto**
Traballas como desenvolvedor/a web nunha axencia de deseño e recibiches un proxecto da **Clínica Dental Sonrisa**. O cliente enviou uns arquivos iniciais pero necesitan **mellorarse significativamente** antes de poder publicar o sitio web.

Dirixete ao repositorio do proxecto 
https://github.com/nunhes/proba-practica-003
e fai un **fork** do repositorio orixinal ao teu perfil GitHub. Descarga o teu fork ao teu ordenador e **completa as tarefas** co fin de obter unha páxina web profesional, accesible e ben estruturada.

Cando remates a tarefa sube o rsultado ao teu repositorio GitHub. E remite a URL do teu repositorio ao profesor.

---

## **🎯 Obxectivo**
**Corrixir e mellorar** o código existente aplicando **boas prácticas de desenvolvemento web**, seguindo as especificacións técnicas e garantindo que a páxina sexa totalmente funcional en todos os dispositivos.

**Tempo estimado:** 40-60 minutos

---

## **📁 Arquivos proporcionados**
No repositorio Git atoparás os arquivos principais:

1. **`index.html`** - Estrutura HTML básica (con varios erros a corrixir)
2. **`style.css`** - Estilos CSS (parcialmente completos)
3. **`favicon.ico`** - Favicon
4. **`main.js`** - Script de validación básico

---

## **🔧 Tarefas a realizar**

### **📝 PARTE 1: CORRECCIÓNS HTML (Marcado semántico)**
**Arquivo:** `index.html`

1. **Metadatos básicos** 
   - Engadir idioma galego
   - Engadir codificación UTF-8
   - Engadir meta viewport para responsividade
   - Engadir meta description e keywords para SEO

2. **Estructura semántica** 
   - Substituír todos os `<div>` xenéricos por etiquetas semánticas axeitadas:
     - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

3. **Accesibilidade do formulario** 
   - Engadir etiquetas `<label>` para todos os campos
   - Engadir atributos obrigatorios: `for`, `id`, `name`, `required`
   - Corrixir o botón de envío (`type="submit"`)

4. **Enlaces e recursos** 
   - Engadir favicon
   - Corrixir a arquitectura de cartafoles
   - Enlazar CSS e JS desde cartafoles axeitados

---

### **🎨 PARTE 2: OPTIMIZACIÓN CSS (Variables e DRY)**
**Arquivo:** `style.css`

5. **Identificación de valores repetidos** 🔍
   - Localizar todas as cores que se repiten
   - Identificar espaciados duplicados
   - Marcar valores numéricos que deberían ser consistentes

6. **Creación de variables CSS** 🎯
   - Completar a sección `:root` con variables para:
     - Cores (primarias, secundarias, de borde)
     - Espaciados (pequenos, medios, grandes)
     - Radios de borde
     - Anchos máximos

7. **Aplicación de variables** ✨
   - Substituír TODOS os valores fixos polas variables correspondentes
   - Garantir consistencia visual en todo o sitio

8. **Melloras responsivas** 📱
   - Completar os estilos para dispositivos móbiles
   - Asegurar que a grade de servizos se adapte correctamente

---

## **🚀 Requisitos técnicos obrigatorios**

### **✅ Debe cumprir:**
- ✅ HTML5 válido (pasar validación W3C)
- ✅ CSS3 con variables correctamente aplicadas
- ✅ Formulario totalmente accesible
- ✅ Diseño responsivo (mobile-first)
- ✅ Arquitectura de cartafoles organizada

### **🚫 Non se acepta:**
- ❌ Valores de cor fixos no CSS (excepto nas variables)
- ❌ Divs xenéricos cando hai etiquetas semánticas
- ❌ Inputs sen etiquetas asociadas
- ❌ CSS e JS enlazados incorrectamente

---

## **📦 Entrega**

### **Proceso de entrega:**
1. **Fork** do repositorio orixinal
2. **Clone** na túa máquina local
3. **Realiza** todas as correccións e melloras
4. **Commits** descriptivos ("feat: engadir variables CSS", "fix: corrixir formulario")
5. **Push** ao teu repositorio
6. **Enviar** URL do teu repositorio completado

### **Estrutura final requirida:**
```
clínica-dental/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   ├── favicon.ico
│   └── (outras imaxes)
└── README.md
```

---

## **💡 Consellos para o éxito**

### **Estratexia recomendada:**
1. **Primeiro:** Correxir o HTML básico (10-15 min)
2. **Despois:** Completar as variables CSS (15-20 min)  
3. **Logo:** Aplicar variables a todo o CSS (10-15 min)
4. **Finalmente:** Probar e depurar (5-10 min)

### **Prioridades:**
1. 🟢 **ALTA:** HTML semántico e formulario accesible
2. 🟡 **MEDIA:** Variables CSS aplicadas correctamente
3. 🔵 **BAIXA:** Estilos avanzados ou efectos visuais

---

## **🔍 Recursos dispoñibles**

- **Documentación MDN:** HTML5 Semántico, CSS Variables
- **Validadores online:** W3C Validator
- **Ferramentas:** DevTools do navegador para depuración
- **Repositorio base:** [URL do repo Git] (será proporcionada)

---

## **⏰ Xestión do tempo**

- **0-20 min:** Correcións HTML + estrutura básica
- **20-40 min:** Variables CSS + aplicación
- **40-50 min:** Responsividade + probas
- **50-60 min:** Revisión final + commit

**Recorda:** Funciona > Perfecto. Entrega algo que funcione antes que algo incompleto pero "bonito".

---

## **🎖️ Elementos bonus (opcionais)**

Se sobra tempo, podes engadir:
- ✅ Validación JavaScript do formulario
- ✅ Efectos hover nos botóns
- ✅ Modo escuro con media queries
- ✅ Animacións CSS sutís
- ✅ SEO mellorado con OpenGraph

---

**✨ Boa sorte! Mostra as túas habilidades de desenvolvemento web profesional. ✨**

---

*"O código limpo non é un luxo, é unha necesidade. Cada liña que escribes é unha promesa de calidade."*
