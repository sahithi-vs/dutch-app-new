# Git Bash Configuration with Auto-suggestions

# Enable Git completion
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi

# Enable command history auto-suggestions (like Fish shell)
# This will show suggestions from your command history as you type
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'

# Better history settings
export HISTSIZE=10000
export HISTFILESIZE=20000
export HISTCONTROL=ignoredups:erasedups
shopt -s histappend

# Auto-complete from history with arrow keys
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'

# Enable case-insensitive tab completion
bind 'set completion-ignore-case on'

# Show all completions immediately
bind 'set show-all-if-ambiguous on'

# Colored prompt with git branch
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# Colorful prompt
export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\]\$ "

# Useful aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline --graph --decorate'
alias gd='git diff'
alias ll='ls -la'

echo "Git Bash auto-suggestions enabled! ✓"
