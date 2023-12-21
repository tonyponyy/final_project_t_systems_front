
# DeepCodeSkill API ![App logo](/src/assets/img/deepcodeskill.png) 

Este proyecto ha sigo generado con [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Lista de Rutas

1. **Login**
   - Ruta: `/login`
   - Componente: `LoginComponent`
   - Descripción: Página de inicio de sesión para los usuarios.

2. **Inicio (por defecto)**
   - Ruta: `/`
   - Componente: `LoginComponent`
   - Descripción: Página de inicio predeterminada, redirige a la página de inicio de sesión.

3. **Mis Entrevistas**
   - Ruta: `/myinterviews`
   - Componente: `MyInterviewsComponent`
   - Descripción: Lista de entrevistas asociadas al usuario actual.

4. **Entrevistas**
   - Ruta: `/interviews`
   - Componente: `InterviewsComponent`
   - Descripción: Lista de todas las entrevistas (accesible solo para usuarios con rol de recursos humanos).

5. **Detalle de Entrevista**
   - Ruta: `/interview/:id`
   - Componente: `InterviewComponent`
   - Descripción: Detalles de una entrevista específica (accesible solo para usuarios con rol de recursos humanos).

6. **Detalle de Entrevista (Recursos Humanos)**
   - Ruta: `/interview_hr/:id`
   - Componente: `InterviewHrComponent`
   - Descripción: Detalles de una entrevista específica para usuarios con rol de recursos humanos.

7. **Registro**
   - Ruta: `/register`
   - Componente: `NewUserComponent`
   - Descripción: Página de registro de nuevos usuarios.

8. **Perfil**
   - Ruta: `/profile`
   - Componente: `ProfileComponent`
   - Descripción: Página de perfil del usuario (accesible solo para usuarios autenticados).

9. **Vista de Administrador**
   - Ruta: `/admin`
   - Componente: `AdminViewComponent`
   - Descripción: Vista de administrador para la gestión de la aplicación (accesible solo para usuarios con rol de administrador).

10. **Nueva Entrevista**
    - Ruta: `/new_interview`
    - Componente: `NewInterviewComponent`
    - Descripción: Creación de una nueva entrevista (accesible solo para usuarios con rol de recursos humanos).

11. **Editar Entrevista**
    - Ruta: `/edit_interview/:id`
    - Componente: `EditInterviewComponent`
    - Descripción: Edición de una entrevista existente (accesible solo para usuarios autenticados).

12. **Habilidades**
    - Ruta: `/skills`
    - Componente: `SkillsComponent`
    - Descripción: Gestión de habilidades (accesible solo para usuarios con rol de recursos humanos).

13. **Página No Encontrada**
    - Ruta: `/**`
    - Componente: `NotFoundComponent`
    - Descripción: Página mostrada cuando no se encuentra la ruta especificada.

