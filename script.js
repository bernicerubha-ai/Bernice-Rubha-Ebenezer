document.addEventListener('DOMContentLoaded', () => {
    const showSkillsBtn = document.getElementById('show-skills-btn');
    const skillsSection = document.getElementById('skills-section');

    showSkillsBtn.addEventListener('click',() => {
        skillsSection.classList.toggle('hidden');
        if (skillsSection.classList.contains('hidden')) {
            showSkillsBtn.textContent = 'Show Key Skills';
        } else {
            showSkillsBtn.textContent = 'Hide Key Skills';
        }
    });
});